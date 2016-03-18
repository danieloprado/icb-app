import {Provider, provide} from 'angular2/core';

import {ApiHttp} from './providers/apiHttp';
import {AuthService} from './providers/authService';
import {ChurchService} from './providers/churchService';
import {EventService} from './providers/eventService';
import {InformativeService} from './providers/informativeService';
import {LoginService} from './providers/loginService';


export var APP_PROVIDERS: any[] = [
  ApiHttp,
  AuthService,
  ChurchService,
  EventService,
  InformativeService,
  LoginService
];
