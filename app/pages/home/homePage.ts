import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {InformativeLastComponent} from './informativeLastComponent';
import {EventNextComponent} from './eventNextComponent';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [InformativeLastComponent, EventNextComponent]
})
export class HomePage {

}
