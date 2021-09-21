import Model from './Model';

export default interface Reward extends Model {
    ID: number;
    Name: string;
    Description: string;
    FinePrint: string;
    Points: number;
    Value: number;
    UmbrellaMethod?: string;
    Process?: string;
    DateRedeemed?: Date;
}