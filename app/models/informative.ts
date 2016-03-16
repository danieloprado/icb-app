export class Informative {
  _id: string;
  church: string;
  title: string;
  message: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: any) {
    this._id = data._id;
    this.church = data.church;
    this.title = data.title;
    this.message = data.message;
    this.date = new Date(data.date);
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
  }
}
