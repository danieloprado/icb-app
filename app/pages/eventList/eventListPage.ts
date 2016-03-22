import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams } from 'ionic-angular';

import {Event} from '../../models/event';
import {EventService} from '../../providers/eventService';
import {EventPage} from '../event/eventPage';


@Page({
  templateUrl: 'build/pages/eventList/eventList.html',
})
export class EventListPage implements OnInit {
  loading: boolean;
  events: Event[];

  constructor(
    private eventService: EventService,
    private nav: NavController
    ) { }

  ngOnInit() {
    this.loading = true;
    this.eventService.list().then(events => {
      this.loading = false;
      this.events = events;
    }).catch(error => {
      this.loading = true;
      console.error(error);
    });
  }

  details(event: Event) {
    this.nav.push(EventPage, {
      event: event
    });
  }
}
