import {OnInit} from 'angular2/core';
import {Page} from 'ionic-angular';

import {Church} from '../../models/church';
import {ChurchService} from '../../providers/churchService';

@Page({
  templateUrl: "build/pages/about/about.html"
})
export class AboutPage implements OnInit {
  loading: boolean;
  church: Church;

  constructor(
    private churchService: ChurchService
    ) { }

  ngOnInit() {
    this.loading = true;
    this.churchService.current().then(church => {
      this.loading = false;
      this.church = church;
    }).catch(err => {
      console.log(err);
      this.loading = false;
    });
  }
}
