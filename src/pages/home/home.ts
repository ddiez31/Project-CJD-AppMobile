import {Component, ViewChild} from '@angular/core';
import {NavController, MenuController, LoadingController} from 'ionic-angular';

import {WelcomePage} from '../welcome/welcome';
import {ProfilePage} from '../profile/profile';
import {EventsPage} from '../events/events';
import {MondayMailPage} from '../mondaymail/mondaymail';
import {TrombinoscopePage} from '../trombinoscope/trombinoscope';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  private category : any;

  constructor(public navCtrl : NavController, public menuCtrl : MenuController, public loadingCtrl : LoadingController) {}

  // Navigation pages
  setCategory(category) {
    switch (category) {
      case 'profile':
        this
          .navCtrl
          .setRoot(ProfilePage, {}, {animate: true});
        break;
      case
        'mondayMail':
        this
          .navCtrl
          .setRoot(MondayMailPage, {}, {animate: true});
        break;
      case 'events':
        this
          .navCtrl
          .setRoot(EventsPage, {}, {animate: true});
        break;
      case 'trombinoscope':
        let loading = this
          .loadingCtrl
          .create({spinner: 'dots', content: `Chargement`, duration: 1000});
        loading.present();
        setTimeout(() => {
          this
            .navCtrl
            .setRoot(TrombinoscopePage, {}, {animate: true});
        }, 1000);
        break;
    }
  }

}
