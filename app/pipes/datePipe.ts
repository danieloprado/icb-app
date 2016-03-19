import {Pipe, PipeTransform} from 'angular2/core';
import * as moment from '~moment/moment';

moment.locale("pt-BR");

@Pipe({ name: "date" })
export class DatePipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    let format = "MMM DD, YYYY";

    if (args && args[0]) {
      const ngFormats = {
        "d": "DD",
        "EEEE": "dddd",
        "y": "YYYY",
        "'as'": "[as]",
        "'DDe'": "[de]",
      }

      format = args[0];
      Object.keys(ngFormats).forEach(key => {
        const reg = RegExp(key, "g");
        format = format.replace(reg, ngFormats[key]);
      });
    }

    return moment(value).format(format);
  }
}
