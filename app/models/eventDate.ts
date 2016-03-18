export class EventDate {
  _id: string;
  beginDate: Date;
  endDate: Date;

  constructor(data: any) {
    this.beginDate = new Date(data.beginDate);
    this.endDate = new Date(data.endDate);
  }
}
