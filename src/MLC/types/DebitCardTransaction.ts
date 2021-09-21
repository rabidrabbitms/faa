
import DebitCard from './DebitCard';
import ServiceResponse from './ServiceResponse';
import User from './User';
import Model from './Model';

export default DebitCardTransaction;

export interface DebitCardTransaction extends Model {
    DebitID?: number;
    DebitCard?: DebitCard;
    Amount?: number;
    AuthCode?: string;
    ResponseID?: number;
    ServiceResponse?: ServiceResponse;
    UserID?: number;
    User?: User;
    Approved?: boolean;
    Date?: Date;
}