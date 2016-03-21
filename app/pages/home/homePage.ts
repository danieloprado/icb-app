import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {AuthService} from '../../providers/authService';
import {StartPage} from '../start/startPage';

import {InformativeLastComponent} from './informativeLastComponent';
import {EventNextComponent} from './eventNextComponent';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [InformativeLastComponent, EventNextComponent]
})
export class HomePage {
  verified: boolean = false;

  constructor(
    private authService: AuthService,
    private nav: NavController) { }

  ngOnInit() {
    this.authService.getToken().then(token => {
      if (token) {
        this.verified = true;
        return;
      }

      this.nav.setRoot(StartPage);
    });
  }
}
