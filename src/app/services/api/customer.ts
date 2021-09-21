import CustomerScoreCard from "../../../MLC/Types/CustomerScoreCard";
import Issue from "../../../MLC/Types/issue";
import Loan from "../../../MLC/Types/Loan";
import { Selections } from "../../../MLC/Types/Selections";
import { post } from "../../http/post";
export async function scoreCard(id?: number) {
    return <CustomerScoreCard>await post(
        { method: 'FetchScore', controller: 'Customer' },
        { Input: { Customer: id } }
    );
}
export async function issues(id?: number) {
    return <Issue[]>await post(
        { method: 'Issues', controller: 'Customer' },
        { Input: { Customer: id } }
    );
}

export async function loanOptions(model: LoanOptionsRequest) {
    return await post(
        { method: 'LoanOptions', controller: 'Customer' },
        { Input: { ...model } }
    );
}

export async function loanOffers(model: LoanOffersRequest) {
    return await post(
        { method: 'LoanOffers', controller: 'Customer' },
        { Input: { ...model } }
    );
}

export interface LoanOptionsRequest extends LoanOffersRequest {
    Limit?: number;
}

export interface LoanOffersRequest {
    Customer: ID | undefined;
    Store: ID | undefined;
    Selections: Selections;
    PreviousLoan?: Loan | ID | undefined;
}

type ID = number;
