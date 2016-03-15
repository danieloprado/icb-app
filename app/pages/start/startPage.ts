import {OnInit} from 'angular2/core';
import {Page, NavController} from 'ionic-angular';

import {ListPage} from '../list/list';

import {AuthService} from '../../providers/authService';
import {ChurchService} from '../../providers/churchService';
import {LoginService} from '../../providers/loginService';

@Page({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage implements OnInit {

  constructor(
    private authService: AuthService,
    private churchService: ChurchService,
    private loginService: LoginService,
    private nav: NavController) { }

  ngOnInit() {
    if (this.authService.hasToken()) {
      this.nav.setRoot(ListPage);
      return;
    }

    this.churchService.list().flatMap(churches => {
      console.log("twice?");
      return this.loginService.byChurch(churches[0]);
    }).subscribe(token => {
      this.nav.setRoot(ListPage);
    });
  }
}
