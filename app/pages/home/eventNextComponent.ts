import {OnInit, Component} from 'angular2/core';
import { NavController, NavParams, IONIC_DIRECTIVES } from 'ionic-angular';

import {Event} from '../../models/event';
import {EventService} from '../../providers/eventService';

@Component({
  selector: 'event-last',
  templateUrl: 'build/pages/home/eventNext.html',
  directives: [IONIC_DIRECTIVES]
})
export class EventNextComponent implements OnInit {
  loading: boolean = true;
  event: Event;

  constructor(private nav: NavController, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.next().then(event => {
      this.loading = false;
      this.event = event;
    });
  }
}
