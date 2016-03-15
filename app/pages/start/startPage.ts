import {OnInit} from 'angular2/core';
import {Page} from 'ionic-angular';
import {ChurchService} from '../../providers/churchService';
import {LoginService} from '../../providers/loginService';

@Page({
  templateUrl: 'build/pages/start/start.html'
})
export class StartPage implements OnInit {

  constructor(private churchService: ChurchService, private loginService: LoginService) { }

  ngOnInit() {
    this.churchService.list().subscribe(churchs => {
      console.log(churchs);
      this.loginService.byChurch(churchs[0]).subscribe(token => {
        console.log(token);
      });
    });
  }
}
