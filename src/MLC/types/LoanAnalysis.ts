
import Loan from './Loan';
import CustomerScoreCard from './CustomerScoreCard';
import Model from './Model';

export default LoanAnalysis;

export interface LoanAnalysis extends Model {
    ID?: number;
    Loan?: Loan;
    ScoreCardID?: number;
    ScoreCard?: CustomerScoreCard;
    PerformanceScore?: number;
    NMI?: number;
    GMI?: number;
    Decile?: number;
    LoanDecile?: number;
    Date?: Date;
}