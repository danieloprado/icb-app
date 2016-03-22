import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';
import {Informative} from '../models/informative';

import {CacheService} from './cacheService';

import 'rxjs/Rx';

@Injectable()
export class InformativeService {
  constructor(private http: ApiHttp) { }

  list(): Promise<Informative[]> {
    return CacheService("informative/list", this.http.get("/informative"))
      .then(data => data.map(i => new Informative(i)));
  };

  last(): Promise<Informative> {
    return CacheService("informative/last", this.http.get("/informative/last"))
      .then(informative => informative ? new Informative(informative) : null);
  };


}
