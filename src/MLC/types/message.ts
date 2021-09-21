
import Model from './Model';

export default Message;

export interface Message extends Model {
    Name?: string;
    Body?: string;
}