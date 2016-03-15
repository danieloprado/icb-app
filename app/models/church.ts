import {Location} from './location';

export class Church {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updateAt: Date;
  location: Location;

  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.createdAt = new Date(data.createdAt);
    this.updateAt = new Date(data.updateAt);

    if (data.location) {
      this.location = new Location(data.location);
    }
  }
}
