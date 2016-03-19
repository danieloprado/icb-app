import {Provider, provide, PLATFORM_PIPES} from 'angular2/core';
import {MarkedownPipe} from './pipes/markdownPipe';
import {DatePipe} from './pipes/datePipe';

export var APP_PIPES: any[] = [
  provide(PLATFORM_PIPES, { useValue: [MarkedownPipe, DatePipe], multi: true })
];
