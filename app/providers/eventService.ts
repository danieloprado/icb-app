import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';

import {Event} from '../models/event';
import {CacheService} from './cacheService';

import 'rxjs/Rx';

@Injectable()
export class EventService {
  constructor(private http: ApiHttp) { }

  next(): Promise<Event> {
    return CacheService("event/next", this.http.get("/event/next"))
      .then(event => event ? new Event(event) : null);
  };

  list(): Promise<Event[]> {
    return CacheService("event/list", this.http.get("/event"))
      .then(events => events.map(e=> new Event(e)))
  }


}
