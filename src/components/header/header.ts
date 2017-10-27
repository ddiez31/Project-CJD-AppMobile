import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HomePage} from '../../pages/home/home';

@Component({selector: 'myHeader', templateUrl: 'header.html'})
export class HeaderComponent {

  constructor(public navCtrl : NavController) {}

  home() {
    this
      .navCtrl
      .setRoot(HomePage, {}, {animate: true});
  }

}
