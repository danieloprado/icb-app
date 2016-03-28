import {Injectable} from 'angular2/core';
import {Http, Headers, Response, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './authService';

@Injectable()
export class ApiHttp {
  private API_URL = "http://localhost:3001/api/app";

  constructor(private http: Http, private authService: AuthService) { }

  private defaultHeaders(options?: RequestOptionsArgs): Promise<RequestOptionsArgs> {
    return this.authService.getToken().then(token => {
      options = options || {};
      options.headers = options.headers || new Headers();

      options.headers.append("Content-type", "application/json");

      if (token) {
        options.headers.append("Authorization", `Bearer ${token}`);
      }

      return options;
    });;
  }

  private inspectToken(response: Response): Response {
    if (response.headers.has("X-Token")) {
      this.authService.setToken(response.headers.get("X-Token"));
    }

    return response;
  }

  get(url: string, options?: RequestOptionsArgs): Promise<Response> {
    return this.defaultHeaders(options)
      .then(options => this.http.get(this.API_URL + url, options).toPromise())
      .then(res => this.inspectToken(res));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Promise<Response> {
    return this.defaultHeaders(options)
      .then(options => this.http.post(this.API_URL + url, JSON.stringify(body), options).toPromise())
      .then(res => this.inspectToken(res));
  }

}
