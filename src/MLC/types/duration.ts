import Model from './Model';

export default Duration;

export interface Duration extends Model {
    Type?: DurationType;
    Amount?: number;
}

export interface DurationType {}
