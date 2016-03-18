import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';

import {Event} from '../models/event';

import 'rxjs/Rx';

@Injectable()
export class EventService {
  constructor(private http: ApiHttp) { }

  next(): Promise<Event> {
    return this.http.get("/event/next").then(res => {
      localStorage.setItem("event/next", res.text());
      return res.text() ? new Event(res.json()) : null;
    }).catch(res => {
      const cache = localStorage.getItem("event/next");
      if (!cache) throw res;

      return new Event(JSON.parse(cache));
    });
  };


}
