import {Provider, provide, PLATFORM_DIRECTIVES} from 'angular2/core';

import {StaticMapComponent} from './components/staticMap';

export var APP_DIRECTIVES: any[] = [
  provide(PLATFORM_DIRECTIVES, { useValue: [StaticMapComponent], multi: true })
];
