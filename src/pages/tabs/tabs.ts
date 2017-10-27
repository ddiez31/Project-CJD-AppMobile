import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {MondayMailPage} from '../mondaymail/mondaymail';
import {EventsPage} from '../events/events';
import {TrombinoscopePage} from '../trombinoscope/trombinoscope';

@Component({templateUrl: 'tabs.html'})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MondayMailPage;
  tab3Root = EventsPage;
  tab4Root = TrombinoscopePage;

  constructor() {}

}
