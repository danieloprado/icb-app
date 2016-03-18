import {OnInit, Component} from 'angular2/core';
import { NavController, NavParams, IONIC_DIRECTIVES } from 'ionic-angular';

import {Informative} from '../../models/informative';
import {InformativeService} from '../../providers/informativeService';

import {InformativePage} from '../../pages/informative/informativePage';

@Component({
  selector: 'informative-last',
  templateUrl: 'build/pages/home/informativeLast.html',
  directives: [IONIC_DIRECTIVES]
})
export class InformativeLastComponent implements OnInit {
  loading: boolean = true;
  informative: Informative;

  constructor(private informativeService: InformativeService,
    private nav: NavController) {
  }

  ngOnInit() {
    this.informativeService.last().then(informative => {
      this.loading = false;
      this.informative = informative;
    }).catch(error => {
      this.loading = false;
      console.log("error", error);
    });
  }

  details() {
    this.nav.push(InformativePage, {
      informative: this.informative
    });
  }
}
