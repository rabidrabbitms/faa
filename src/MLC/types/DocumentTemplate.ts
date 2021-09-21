
import State from './State';
import Document from './Document';
import Model from './Model';

export default DocumentTemplate;

export interface DocumentTemplate extends Model {
    Name?: string;
    Html?: string;
    Date?: Date;
    StateID?: number;
    State?: State;
    Documents?: Document[];
}