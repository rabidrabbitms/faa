
import ServiceProvider from './ServiceProvider';
import ServiceMethod from './ServiceMethod';
import Model from './Model';

export default Service;

export interface Service extends Model {
    Name?: string;
    Domain?: string;
    jsonHeaders?: string;
    jsonCredentials?: string;
    jsonVariables?: string;
    Headers?: { [key: string]: string; };
    Credentials?: { [key: string]: string; };
    Variables?: { [key: string]: string; };
    ProviderID?: number;
    Provider?: ServiceProvider;
    Methods?: ServiceMethod[];
}