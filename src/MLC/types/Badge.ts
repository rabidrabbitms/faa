import Model from './Model';

export default interface Badge extends Model {
    Name?: string;
    Description?: string;
    Type?: string;
    IconUrl?: string;
    TotalPoints: number;
    Count: number;
}