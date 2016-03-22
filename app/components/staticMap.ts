import {Component, Input, OnInit, Renderer} from 'angular2/core';

@Component({
  selector: "static-map",
  template: `<a href="{{geoUrl}}" targe="_blank" *ngIf="imageUrl">
              <img src="{{imageUrl}}" />
             </a>`,
})
export class StaticMapComponent implements OnInit {
  geoUrl: string;
  imageUrl: string;

  @Input("lat") lat: string;
  @Input("lng") lng: string;
  @Input("height") height: string = "200";

  constructor(renderer: Renderer) {
    this.geoUrl = "";
    this.imageUrl = "";

    renderer.listenGlobal("window", "resize", () => {
      setTimeout(_=> this.build(), 0);
    });
  }

  ngOnInit() {
    this.build();
  }

  private build() {
    const width = window.screen.width;
    this.geoUrl = `geo:${this.lat},${this.lng}`;
    this.imageUrl = `http://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lng}&zoom=14&size=${width}x${this.height}&markers=${this.lat},${this.lng}`;
  }
}
