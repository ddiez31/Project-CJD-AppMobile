import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EventsMock} from './../../models/events.db';
import * as Events from '../../models/events.db';

import {EventDetailsPage} from '../event-details/event-details';

@Component({selector: 'page-events', templateUrl: 'events.html'})
export class EventsPage {
  private events : Events.EventsModel[];
  private searchQuery : string = '';

  constructor(public navCtrl : NavController) {
    this.initializeEvents();
  }

  initializeEvents() {
    this.events = Events.EventsMock;
  }

  // View selected event details
  eventDetails(event) {
    this
      .navCtrl
      .push(EventDetailsPage, {event: event});
  }

}
