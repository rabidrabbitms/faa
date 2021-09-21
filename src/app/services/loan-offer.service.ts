import { Inject, Injectable } from '@angular/core';
import Selections from '../../MLC/Types/selections';
import * as MLC from '../../MLC/_import';
import loanServiceToken from '../tokens/loan.service.token';
import { loanOffers } from './api/customer';
import { Global } from './Global';
import LoanService from './loan.service';
import FundingOption from '../../MLC/Types/FundingOption';
import Reward from '../../MLC/Types/Reward';

@Injectable({ providedIn: 'root' })
export default class LoanOfferService {
    constructor(readonly global: Global, @Inject(loanServiceToken) readonly loanService: LoanService) { }

    fetchLoanOffers(selections: Selections) {
        return loanOffers({
            Customer: this.global.customerID,
            Store: this.global.storeID,
            Selections: selections,
            PreviousLoan:
                this.loanService.previousLoan &&
                this.loanService.previousLoan.ID
        });
    }
    __selectedLoanOffer?: MLC.Types.Offer;
    get selectedLoanOffer(): MLC.Types.Offer | undefined {
        return this.__selectedLoanOffer;
    }
    set selectedLoanOffer(value) {
        this.__selectedLoanOffer = value;
    }

    __loanSelections?: MLC.Types.Selections;
    get loanSelections(): MLC.Types.Selections | undefined {
        return this.__loanSelections;
    }
    set loanSelections(value) {
        this.__loanSelections = value;
    }

    __amount?: number;
    get amount(): number | undefined {
        return this.__amount;
    }
    set amount(value: number | undefined) {
        this.__amount = value;
    }

    __reason?: Reason;
    get reason(): Reason | undefined {
        return this.__reason;
    }
    set reason(value) {
        this.__reason = value;
    }

    __redemption?: Reward;
    get redemption(): Reward | undefined {
        return this.__redemption;
    }
    set redemption(value) {
        this.__redemption = value;
    }
}

interface Reason {
    Reason?: string;
    SubReason?: string;
}