import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Informative} from '../../models/informative';
import {InformativeService} from '../../providers/informativeService';
import {informativeListSearchPipe} from './informativeListSearchPipe';
import {InformativePage} from '../informative/informativePage';


@Page({
  templateUrl: 'build/pages/informativeList/informativeList.html',
  pipes: [informativeListSearchPipe]
})
export class InformativeListPage implements OnInit {
  loading: boolean;
  searchQuery: string;
  informatives: Informative[];

  constructor(
    private informativeService: InformativeService,
    private nav: NavController
    ) {
    this.searchQuery = "";
  }

  ngOnInit() {
    this.loading = true;
    this.informativeService.list().then(informatives => {
      this.loading = false;
      this.informatives = informatives;
    }).catch(error => {
      this.loading = false;
      console.log("error", error);
    });
  }

  details(informative) {
    this.nav.push(InformativePage, {
      informative: informative
    });
  }
}
