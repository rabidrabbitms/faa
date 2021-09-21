import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdverseAction, LoanRequest } from 'src/MLC/Types/_import';
import { Global } from './Global';
import HttpService from './http.service';
import ModelService from './model.service';

@Injectable({ providedIn: 'root' })
export default class CustomerService {
    constructor(
        readonly router: Router,
        readonly global: Global,
        readonly http: HttpService,
        readonly models: ModelService
    ) { }

    async issueAdverseActions(customerID: number, loanRequest: LoanRequest | undefined, adverseActions: CustomerService.AdverseActionModel[]) {
        const adverseActionsIssued = await Promise.all(
            adverseActions
                .map(async ({ reasonID, customerInitiated }) => {
                    const denial: AdverseAction = {
                        User: { ID: this.global.userID },
                        CustomerInitiated: customerInitiated,
                        Reason: { ID: reasonID },
                        Customer: { ID: customerID },
                        LoanRequest: loanRequest && { ID: loanRequest.ID }
                    };
                    return await this.models.save('AdverseAction', denial);
                })
        );

        if (loanRequest) {
            loanRequest.Status = {
                Type: { Name: 'Completed.Declined' },
                User: { ID: this.global.userID }
            };
            await this.models.save('LoanRequest', loanRequest);
        }
        await this.http.post(
            { controller: 'Customer', method: 'EmailAdverseActions' },
            {
                AdverseActionsIDs: adverseActionsIssued.map(action => action.ID),
                CustomerID: customerID
            }
        );
    }

    /**
     * Checks if a customer can request a loan.
     * @param customerID ID of the customer to check.
     * @returns True if the customer can request a loan, false otherwise.
     */
    async canRequestLoan(customerID: number): Promise<boolean> {
        return await this.http.post(
            { controller: "Customer", method: `CanRequestLoan?customerID=${customerID}` },
            {}
        );
    }
}
declare namespace CustomerService {
    export interface AdverseActionModel {
        customerInitiated: boolean;
        reasonID: number;
    }
}
