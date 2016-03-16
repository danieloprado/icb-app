import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';
import {Informative} from '../models/informative';

import 'rxjs/Rx';

@Injectable()
export class InformativeService {
  constructor(private http: ApiHttp) { }

  last(): Promise<Informative> {
    return this.http.get("/informative/last").toPromise().then(res => {
      localStorage.setItem("informative/last", res.text());
      return res.text() ? new Informative(res.json()) : null;
    }).catch(res => {
      const cache = localStorage.getItem("informative/last");
      if (!cache) throw res;

      return new Informative(JSON.parse(cache));
    });
  };
}
