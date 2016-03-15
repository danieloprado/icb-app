import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';
import {Church} from '../models/church';

import 'rxjs/Rx';

@Injectable()
export class ChurchService {
  constructor(private http: ApiHttp) { }

  list(): Observable<Church[]> {
    return this.http.get("/church")
      .map(res => res.json().map(i => new Church(i)));
  };
}
