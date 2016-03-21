import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';

import {HomePage} from '../home/homePage';

import {ChurchService} from '../../providers/churchService';
import {LoginService} from '../../providers/loginService';

@Page({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage implements OnInit {

  constructor(
    private churchService: ChurchService,
    private loginService: LoginService,
    private nav: NavController) { }

  ngOnInit() {
    this.churchService.list().then(churches => {
      return this.loginService.byChurch(churches[0]);
    }).then(token => {
      this.nav.setRoot(HomePage);
    });
  }
}
