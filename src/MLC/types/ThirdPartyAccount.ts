
import Customer from './Customer';
import ServiceProvider from './ServiceProvider';
import ServiceResponse from './ServiceResponse';
import User from './User';
import ThirdPartyAccountType from './ThirdPartyAccountType';
import Model from './Model';

export default ThirdPartyAccount;

export interface ThirdPartyAccount extends Model {
    CustomerID?: number;
    Customer?: Customer;
    ServiceProviderID?: number;
    ServiceProvider?: ServiceProvider;
    UserID?: number;
    User?: User;
    ResponseID?: number;
    Response?: ServiceResponse;
    Description?: string;
    Value?: string;
    Type?: ThirdPartyAccountType;
    Date?: Date;
}