import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';
import {Informative} from '../models/informative';

import 'rxjs/Rx';

@Injectable()
export class InformativeService {
  constructor(private http: ApiHttp) { }

  list(): Promise<Informative[]> {
    return this.http.get("/informative/").toPromise().then(res => {
      localStorage.setItem("informatives", res.text());
      return res.json().map(i => new Informative(i));
    }).catch(res => {
      const cache = localStorage.getItem("informatives");
      if (!cache) throw res;

      return JSON.parse(cache).map(i => new Informative(i));
    });
  };

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
