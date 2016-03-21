import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Informative} from '../../models/informative';

@Page({
  templateUrl: 'build/pages/informative/informative.html',
})
export class InformativePage implements OnInit {
  informative: Informative;
  fontSize: number;

  constructor(private params: NavParams) { }

  ngOnInit() {
    this.informative = this.params.get("informative");
    this.fontSize = (localStorage.getItem("informative/font-size") || 1.5) * 1;
  }

  increaseFont() {
    if (this.fontSize >= 2) return;
    this.fontSize = this.fontSize + 0.1;
  }

  decreaseFont() {
    if (this.fontSize <= 1.1) return;
    this.fontSize = this.fontSize - 0.1;
  }

}
