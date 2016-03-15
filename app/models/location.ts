export class Location {
  address: string;
  lat: number;
  lng: number;

  constructor(data: any) {
    this.address = data.address;
    this.lat = data.lat;
    this.lng = data.lng;
  }
}
