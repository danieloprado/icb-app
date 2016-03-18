import {EventDate} from './eventDate';

export class Event {
  _id: string;
  church: string;
  name: string;
  description: string;
  createdAt: Date;
  updateAt: Date;
  dates: EventDate[];

  constructor(data: any) {
    this._id = data._id;
    this.church = data.church;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = new Date(data.createdAt);
    this.updateAt = new Date(data.updateAt);
    this.dates = data.dates.map(d => new EventDate(d));
  }
}
