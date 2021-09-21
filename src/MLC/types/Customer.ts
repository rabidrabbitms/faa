import Person from './Person';
import User from './User';
import Store from './Store';
import CustomerStatus from './CustomerStatus';
import CustomerScoreCard from './CustomerScoreCard';
import Loan from './Loan';
import LoanRequest from './LoanRequest';
import CustomerReference from './CustomerReference';
import CustomerNote from './CustomerNote';
import CustomerOption from './CustomerOption';
import RVPOverride from './RVPOverride';
import ThirdPartyAccount from './ThirdPartyAccount';
import Model from './Model';

export default Customer;

export interface Customer extends Model {
    ID?: number;
    Person?: Person;
    UserID?: number;
    User?: User;
    StoreID?: number;
    Store?: Store;
    Date?: Date;
    Statuses?: CustomerStatus[];
    Status?: CustomerStatus;
    ScoreCards?: CustomerScoreCard[];
    ScoreCard?: CustomerScoreCard;
    Loans?: Loan[];
    LoanRequests?: LoanRequest[];
    CollectionAgencyLoans?: Loan[];
    References?: CustomerReference[];
    Notes?: CustomerNote[];
    Options?: CustomerOption[];
    Overrides?: RVPOverride[];
    ThirdPartyAccounts?: ThirdPartyAccount[];
    LastNote?: CustomerNote;
    ActiveLoans?: Loan[];
    PendingLoans?: LoanRequest[];
    FirstView?: string;
    Returning?: boolean;
    CollectionAgency?: boolean;
    AvailablePoints?: number;
    RegisteredForRewards?: boolean;
}