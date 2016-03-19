import {Injectable} from 'angular2/core';
import {Http, Headers, Response, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './authService';

@Injectable()
export class ApiHttp {
  private API_URL = "http://192.168.0.68:3000/api/app";

  constructor(private http: Http, private authService: AuthService) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    options = options || {};
    options.headers = options.headers || new Headers();

    options.headers.append("Content-type", "application/json");

    if (this.authService.hasToken()) {
      options.headers.append("Authorization", `Bearer ${this.authService.getToken() }`);
    }

    return options;
  }

  private inspectToken(response: Response): Response {
    if (response.headers.has("X-Token")) {
      this.authService.setToken(response.headers.get("X-Token"));
    }

    return response;
  }

  get(url: string, options?: RequestOptionsArgs): Promise<Response> {
    options = this.defaultHeaders(options);
    return this.http.get(this.API_URL + url, options)
      .toPromise()
      .then(res => this.inspectToken(res));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Promise<Response> {
    options = this.defaultHeaders(options);
    return this.http.post(this.API_URL + url, JSON.stringify(body), options)
      .toPromise()
      .then(res => this.inspectToken(res));
  }

}
