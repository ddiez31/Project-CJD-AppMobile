import {Component, ViewChild} from '@angular/core';
import {App, Nav, Platform, MenuController, LoadingController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {ConfigService} from '../services/config.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {AuthService} from '../services/auth.service';

import {WelcomePage} from '../pages/welcome/welcome';
import {ProfilePage} from '../pages/profile/profile';
import {EventsPage} from '../pages/events/events';
import {MondayMailPage} from '../pages/mondaymail/mondaymail';
import {TrombinoscopePage} from '../pages/trombinoscope/trombinoscope';
import {HomePage} from '../pages/home/home';

@Component({templateUrl: 'app.html'})
export class MyApp {
  @ViewChild(Nav)nav : Nav;

  rootPage : any = WelcomePage;

  pages : Array < {
    title: string,
    component: any
  } >;

  constructor(private app : App, private configService : ConfigService, public authService : AuthService, private screenOrientation : ScreenOrientation, private keyboard : Keyboard, private platform : Platform, statusBar : StatusBar, splashScreen : SplashScreen, public menuCtrl : MenuController, public loadingCtrl : LoadingController) {
    platform
      .ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available. Here you can do
        // any higher level native things you might need.
        if (this.platform.is('ios')) {
          keyboard.disableScroll(true);
        }
        statusBar.styleDefault();
        splashScreen.hide();
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      });

    this.pages = [
      {
        title: 'Accueil',
        component: HomePage
      }, {
        title: 'Mail du Lundi',
        component: MondayMailPage
      }, {
        title: 'Evènements',
        component: EventsPage
      }, {
        title: 'Trombinoscope',
        component: TrombinoscopePage
      }, {
        title: 'Mon profil',
        component: ProfilePage
      }, {
        title: 'Déconnexion',
        component: WelcomePage
      }
    ];
    // configService.setDebug('warn', '###', 'WARN'); configService.setDebug('log',
    // '###', 'LOG'); configService.setDebug('debug', '###', 'DEBUG');
    // configService.setDebug('info', '###', 'INFO');
    // configService.setDebug('trace', '###', 'TRACE');
  }

  openPage(page) {
    // Reset the content nav to have just this page we wouldn't want the back button
    // to show in this scenario
    (page.title != 'Déconnexion')
      ? this
        .nav
        .setRoot(page.component)
      : this.logout();

  }

  logout() {
    let loading = this
      .loadingCtrl
      .create({spinner: 'dots', content: `Déconnexion`, duration: 600});
    loading.present();
    setTimeout(() => {
      this
        .authService
        .logout();
      // Disabled sidemenu
      this
        .menuCtrl
        .enable(false);
      this
        .nav
        .setRoot(WelcomePage, {}, {animate: false});
    }, 1000);
  };

}
