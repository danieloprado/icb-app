import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Event} from '../../models/event';

@Page({
  templateUrl: 'build/pages/event/event.html',
})
export class EventPage implements OnInit {
  event: Event;

  constructor(private params: NavParams) { }

  ngOnInit() {
    this.event = this.params.get("event");
  }

}
