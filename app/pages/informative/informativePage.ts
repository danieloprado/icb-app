import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Informative} from '../../models/informative';
import {Markdown} from '../../directives/markdown';


@Page({
  templateUrl: 'build/pages/informative/informative.html',
  directives: [Markdown]
})
export class InformativePage implements OnInit {
  informative: Informative;

  constructor(private params: NavParams) {
    this.informative = params.get("informative");
    console.log(this.informative);
  }

  ngOnInit() {

  }
}
