import {Pipe, PipeTransform} from 'angular2/core';
import {Informative} from '../../models/informative';

@Pipe({ name: "informativeSearch" })
export class informativeListSearchPipe implements PipeTransform {

  transform(value: Informative[], args: string[]): any {
    const searchQuery = args[0];
    if (!searchQuery) return value;

    return value.filter(informative => {
      return informative.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
}
