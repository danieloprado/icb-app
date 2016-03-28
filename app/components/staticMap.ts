import {Component, Input, OnInit, Renderer, ViewContainerRef} from 'angular2/core';

@Component({
  selector: "static-map",
  template: `<a href="{{geoUrl}}" targe="_blank" *ngIf="imageUrl">
              <img src="{{imageUrl}}" />
             </a>`,
})
export class StaticMapComponent implements OnInit {
  geoUrl: string;
  imageUrl: string;
  element: any;

  @Input("lat") lat: string;
  @Input("lng") lng: string;
  @Input("height") height: string = "200";

  constructor(renderer: Renderer, viewContainer: ViewContainerRef) {
    this.geoUrl = "";
    this.imageUrl = "";
    this.element = viewContainer.element.nativeElement;
    this.element.style.display = "block";

    renderer.listenGlobal("window", "resize", () => {
      setTimeout(_=> this.build(), 0);
    });
  }

  ngOnInit() {
    this.build();
  }

  private build() {
    const width = this.element.offsetWidth;
    this.geoUrl = `geo:${this.lat},${this.lng}`;
    this.imageUrl = `http://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lng}&zoom=17&size=${width}x${this.height}&markers=${this.lat},${this.lng}`;
  }
}
