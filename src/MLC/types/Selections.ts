import Model from './Model';
import Selection from './Selection';
import FundingSelection from './FundingSelection';

export default Selections;

export interface Selections extends Model{
    Loan?: Selection;
    Funding?: FundingSelection[];
}