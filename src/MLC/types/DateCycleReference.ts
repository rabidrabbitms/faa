import Model from './Model';
import { DateCycleReferenceType } from '../DateCycleReferenceType';

export default interface DateCycleReference extends Model {
    Type?: DateCycleReferenceType;
    Date: Date;
}
