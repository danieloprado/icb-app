import {Injectable} from 'angular2/core';
import {Http, Headers, Response, RequestOptionsArgs} from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiHttp {
  private API_URL = "http://192.168.1.19:3000/api/app";

  constructor(private http: Http) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) options = {
      headers: new Headers()
    };

    options.headers.append("Content-type", "application/json");
    return options;
  }

  get(url: string, options?: RequestOptionsArgs) {
    options = this.defaultHeaders(options);
    return this.http.get(this.API_URL + url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    options = this.defaultHeaders(options);
    return this.http.post(this.API_URL + url, JSON.stringify(body), options);
  }

}
