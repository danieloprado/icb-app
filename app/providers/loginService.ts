import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ApiHttp} from './apiHttp';
import {Church} from '../models/church';

import 'rxjs/Rx';

@Injectable()
export class LoginService {
  constructor(private http: ApiHttp) { }

  byChurch(church: Church): Promise<string> {
    return this.http.post("/auth/login-church", { id: church._id })
      .toPromise()
      .then(res => res.json().text);
  }
}
