import {Injectable} from 'angular2/core';
import {Http, Headers, Response, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './authService';

@Injectable()
export class ApiHttp {
  private API_URL = "http://192.168.1.19:3000/api/app";

  constructor(private http: Http, private authService: AuthService) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) options = {};
    if (!options.headers) options.headers = new Headers();

    options.headers.append("Content-type", "application/json");

    if (this.authService.hasToken()) {
      options.headers.append("Authorization", `Bearer ${this.authService.getToken() }`);
    }

    return options;
  }

  private subscribeForToken(request: Observable<Response>) {
    request.subscribe(res => {
      if (!res.headers.has("X-Token")) return;
      this.authService.setToken(res.headers.get("X-Token"));
    });

    return request.toPromise();
  }

  get(url: string, options?: RequestOptionsArgs) {
    options = this.defaultHeaders(options);
    return this.subscribeForToken(this.http.get(this.API_URL + url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs) {
    options = this.defaultHeaders(options);
    return this.subscribeForToken(this.http.post(this.API_URL + url, JSON.stringify(body), options));
  }

}
