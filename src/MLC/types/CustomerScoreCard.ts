
import ServiceResponse from './ServiceResponse';
import Customer from './Customer';
import User from './User';
import Model from './Model';

export default CustomerScoreCard;

export interface CustomerScoreCard extends Model {
    ResponseID?: number;
    Response?: ServiceResponse;
    CustomerID?: number;
    Customer?: Customer;
    UserID?: number;
    User?: User;
    ClarityScore?: number;
    Debt?: number;
    Date?: Date;
    Expired?: boolean;
    ClarityDecile?: number;
    Score?: number;
    Decile?: number;
    PotentialMaxLoan?: { [key: string]: number; };
    Level?: string;
	DTI?: number;
	RiskDecile: number;
	RiskScore?: number;
	Decline: boolean;
}