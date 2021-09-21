
import AnnouncementStatus from './AnnouncementStatus';
import Person from './Person';
import Model from './Model';

export default Announcement;

export interface Announcement extends Model {
    StatusID?: number;
    Status?: AnnouncementStatus;
    FromID?: number;
    From?: Person;
    ToID?: number;
    To?: Person;
    Subject?: string;
    Body?: string;
    Date?: Date;
}