import { Injectable } from '@angular/core';
import PaymentModel from 'src/MLC/PaymentModel';
import Range from '../../MLC/Range';
import { RolloverFinalizeTransaction } from '../../MLC/RolloverTransaction';
import Loan from '../../MLC/Types/Loan';
import LoanRequest from '../../MLC/Types/LoanRequest';
import LoanOption from '../../MLC/Types/Option';
import Selections from '../../MLC/Types/Selections';
import { loanOptions } from './api/customer';
import { TypeMapping } from './api/requests';
import { Global } from './Global';
import HttpService from './http.service';
import LoanOfferService from './loan-offer.service';
import ModelService from './model.service';
import resolveLoan from './resolvers/resolve-loan';
import Coupon from '../../MLC/Types/Coupon';
import { PaymentMethod } from '../../MLC/PaymentMethod';
import * as MLC from '../../MLC/_import';

let previousLoan: Loan | undefined;

@Injectable({ providedIn: 'root' })
export default class LoanService {
    constructor(
        readonly global: Global,
        readonly models: ModelService,
        readonly loanOfferService: LoanOfferService,
        readonly http: HttpService
    ) { }

    get renewal() {
        return !!previousLoan;
    }
    get previousLoan() {
        return previousLoan;
    }
    async setPreviousLoan(previousLoanID: number | undefined) {
        if (previousLoanID !== undefined)
            previousLoan = await resolveLoan(previousLoanID);
        else previousLoan = undefined;
    }

    async fetchPendingLoans(mapping?) {
        if (!this.global.customerID) throw Error('Not logged in');
        return (
            (await this.models.getProperty(
                'Customer',
                this.global.customerID,
                'PendingLoans',
                mapping
            )) || []
        );
    }
    async fetchActiveLoans(mapping: TypeMapping<Loan> = {}) {
        const loans = await this.http.post(
            {
                controller: 'Customer',
                method:
                    'ActiveLoans'
            },
            {
                TypeMapping: mapping,
                CustomerID: this.global.customerID
            });

        //return <Loan[]>loans.map(loan => ({ ...loan, Type: loan.Request.LoanType }));
        return loans;
    }

    fundingOptions({ store, customer, amount }: { store: number; customer: number, amount: number }) {
        return this.http.post(
            { method: 'FundingOptions', controller: 'Store' },
            { StoreID: store, CustomerID: customer, Amount: amount }
        );
    }
    async fetchRangesForSelections(selections: Selections) {
        const result = await this.http.post(
            { method: 'LoanAmountRanges', controller: 'Customer' },
            {
                Input: {
                    Customer: this.global.customerID,
                    Store: this.global.storeID,
                    PreviousLoan: previousLoan,
                    Selections: selections
                }
            }
        );
        return result;
    }
    async fetchOptionsForSelections(selections: Selections) {
        return await loanOptions({
            Customer: this.global.customerID,
            Store: this.global.storeID,
            PreviousLoan: previousLoan,
            Selections: selections
        });
    }
    async createLoanRequest({ autoPay = false } = {}) {
        if (
            !this.global.customerID ||
            !this.global.storeID ||
            !this.loanOfferService.loanSelections ||
            !this.loanOfferService.selectedLoanOffer
        ) {
            throw Error('invalid loan request');
        }

        const createLoanRequestInput = {
            PreviousLoan: previousLoan && previousLoan.ID,
            Customer: this.global.customerID,
            Store: this.global.storeID,
            Selections: this.loanOfferService.loanSelections,
            Offer: this.loanOfferService.selectedLoanOffer,
            Application: {
                Amount: this.loanOfferService.amount,
                AutoPay: autoPay ? 'ACH' : undefined,
                Reason: this.loanOfferService.reason?.Reason,
                SubReason: this.loanOfferService.reason?.SubReason,
                Coupon: this.loanOfferService.loanSelections.Loan?.Coupon,
                RedemptionMethodDetailID: this.loanOfferService.redemption?.ID
            }
        };
        return await this.http.post(
            { method: 'Create', controller: 'LoanRequest' },
            {
                Selections: createLoanRequestInput.Selections,
                Input: createLoanRequestInput
            }
        );
    }
    async createAdditionalAdvance() {
        if (
            !this.global.customerID ||
            !this.global.storeID ||
            !this.loanOfferService.loanSelections ||
            !this.loanOfferService.selectedLoanOffer
        ) {
            throw Error('invalid loan request');
        }

        const createLoanRequestInput = {
            PreviousLoan: previousLoan && previousLoan.ID,
            Customer: this.global.customerID,
            Store: this.global.storeID,
            Selections: this.loanOfferService.loanSelections,
            Offer: this.loanOfferService.selectedLoanOffer,
            RedemptionMethodDetailID: this.loanOfferService.redemption?.ID
        };
        return await this.http.post(
            { method: 'CreateAdditionalAdvance', controller: 'Loan' },
            {
                Selections: createLoanRequestInput.Selections,
                Input: createLoanRequestInput
            }
        );
    }
    async cancelAdditionalAdvance(loanID: number, mapping?) {
        return await this.http.post(
            { method: 'CancelAdditionalAdvance', controller: 'Loan' },
            {
                LoanID: loanID,
                TypeMapping: mapping
            }
        );
    }
    rangeFromOptions(loanOptions: LoanOption[]): Range<number> {
        const balance =
            (previousLoan &&
                previousLoan.Balances &&
                previousLoan.Balances.Total) ||
            0;
        let min =
            Math.min(
                ...loanOptions.map(option =>
                    Number(
                        option.Amount &&
                        option.Amount.Range &&
                        option.Amount.Range.Minimum
                    )
                )
            ) - balance;
        if (min < 0) min = 0;
        let max =
            Math.max(
                ...loanOptions.map(option =>
                    Number(
                        option.Amount &&
                        option.Amount.Range &&
                        option.Amount.Range.Maximum
                    )
                )
            ) - balance;
        if (max < 0) max = 0;

        return {
            Minimum: min,
            Maximum: max
        };
    }

    finalizeRequest(loanRequestID: number) {
        return this.http.post(
            'Loan',
            { method: 'Create', controller: 'Loan' },
            { Input: { LoanRequest: loanRequestID } }
        );
    }
    finalizeDeferment(id: number) {
        return this.http.post(
            'Loan',
            { method: 'DeferLoan', controller: 'Loan' },
            { ID: id }
        );
    }

    /////Rollover Process\\\\\
    rolloverTransaction({
        id,
        item,
        amount,
        method,
        payDate
    }: {
        id: number;
        item: PaymentModel;
        amount: number;
        method: string;
        payDate?: Date;
    }) {
        return this.loanRpc('RolloverTransaction', {
            Loan: id,
            Item: item,
            Amount: amount,
            Method: method,
            Date: payDate
        });
    }
    rolloverRequest(application) {
        return this.loanRpc(
            'RolloverRequest',
            { Application: application }
        );
    }

    rollover(request: {
        id: number;
        loanRequest: LoanRequest;
        transaction: RolloverFinalizeTransaction;
    }) {
        const {
            id: Loan,
            loanRequest: LoanRequest,
            transaction: Transaction
        } = request;
        return this.loanRpc('Rollover', { Loan, LoanRequest, Transaction });
    }

    /////Payment Process\\\\\
    makePayment(arg: {
        Loan: number;
        Item: any;
        Amount: number;
        Method: string;
        Date: Date;
        RedemptionMethodID?: number;
    }) {
        return this.loanRpc('MakePayment', arg);
    }
    void(id: number) {
        return this.loanRpc('Void', { id });
    }
    loanRpc(method: string, input) {
        return this.http.post(
            'Loan',
            { method, controller: 'Loan' },
            { input }
        );
    }
    clearState() {
        delete localStorage.application;
    }
    /**
     * Gets payoff amount for loan.
     * @param id Loan ID
     * @param date Date of payoff
     * @param isEffectiveDate If it is an ACH payment, then tell the API to use the effective date.
     */
    async payOff(id: number, date: Date, paymentMethod = "") {
        return await this.http.post(
            { method: 'PayOffAmount', controller: 'Loan' },
            { Input: { Loan: id, Date: date, PaymentMethod: paymentMethod } }
        );
    }

    /**
     * Checks if coupon is valid.
     ** @param code - Coupon code to validate.
     */
    validateCoupon(code: string, customerID: number, fundedAmount: number): Promise<Coupon | undefined> {
        return this.http.get(
            { controller: "LoanCoupon", method: `ValidateCouponCode?customerID=${customerID}&couponCode=${code}&amount=${fundedAmount}` }
        );
    }

    getPaymentMethods(loanId: number): Promise<Array<PaymentMethod>> {
        return this.http.get({ controller: "Loan", method: `GetPaymentMethods?loanId=${loanId}&isOverpayment=false` });
    }

    getReasons(): Promise<{ [category: string]: Array<string> }> {
        return this.http.get({ controller: "Loan", method: "Reasons" });
    }
}
