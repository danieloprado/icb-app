import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import {Informative} from '../../models/informative';

import {InformativeService} from '../../providers/informativeService';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  loadingInformative: boolean = true;
  informative: Informative;

  constructor(private informativeService: InformativeService) { }

  ngOnInit() {
    this.informativeService.last().then(informative => {
      this.loadingInformative = false;
      this.informative = informative;
    }).catch(error => {
      this.loadingInformative = false;
      console.log("error", error);
    });
  }
}
