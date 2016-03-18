import {Provider, provide, PLATFORM_PIPES} from 'angular2/core';
import {MarkedownPipe} from './pipes/markdownPipe';

export var APP_PIPES: any[] = [
  provide(PLATFORM_PIPES, { useValue: [MarkedownPipe], multi: true })
];
