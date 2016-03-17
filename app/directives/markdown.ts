import {Directive, ViewContainerRef, Input} from 'angular2/core';
import * as marked from 'marked';

@Directive({
  selector: "[markdown]",
  inputs: ['value: markdown']
})
export class Markdown {
  constructor(private _viewContainer: ViewContainerRef) {
    console.log("makred", marked);
  }

  set value(newValue) {
    this._viewContainer.element.nativeElement.innerHTML = marked(newValue);
  }
}
