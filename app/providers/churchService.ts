import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';

import {Church} from '../models/church';
import {CacheService} from './cacheService';

import 'rxjs/Rx';

@Injectable()
export class ChurchService {
  constructor(private http: ApiHttp) { }

  list(): Promise<Church[]> {
    return this.http.get("/church").then(res => res.json().map(i => new Church(i)));
  };

  current(): Promise<Church> {
    return CacheService("church/current", this.http.get("/church/current"))
      .then(data => new Church(data));
  }
}
