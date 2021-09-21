
import Service from './Service';
import Model from './Model';

export default ServiceProvider;

export interface ServiceProvider extends Model {
    Name?: string;
    jsonHeaders?: string;
    jsonCredentials?: string;
    jsonVariables?: string;
    Headers?: { [key: string]: string; };
    Credentials?: { [key: string]: string; };
    Variables?: { [key: string]: string; };
    Services?: Service[];
}