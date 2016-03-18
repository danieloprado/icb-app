import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Informative} from '../../models/informative';

@Page({
  templateUrl: 'build/pages/informative/informative.html',
})
export class InformativePage implements OnInit {
  informative: Informative;

  constructor(private params: NavParams) { }

  ngOnInit() {
    this.informative = this.params.get("informative");
  }
}
