import {Pipe, PipeTransform} from 'angular2/core';
import * as marked from 'marked';


@Pipe({ name: "markdown" })
export class MarkedownPipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    return marked(value);
  }
}
