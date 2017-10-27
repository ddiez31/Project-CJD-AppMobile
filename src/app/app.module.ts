import {NgModule, ErrorHandler} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ConfigService} from '../services/config.service';
import {AuthService} from '../services/auth.service';

import {CallNumber} from '@ionic-native/call-number';
import {SMS} from '@ionic-native/sms';
import {EmailComposer} from '@ionic-native/email-composer';
import {Contacts} from '@ionic-native/contacts';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';

import {Calendar} from '@ionic-native/calendar';
import {Keyboard} from '@ionic-native/keyboard';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Geolocation} from '@ionic-native/geolocation';
import {HttpModule} from '@angular/http';

import {MyApp} from './app.component';
import {ComponentsModule} from '../components/components.module';

import {WelcomePage} from '../pages/welcome/welcome';
import {HomePage} from '../pages/home/home';
import {MondayMailPage} from '../pages/mondaymail/mondaymail';
import {EventsPage} from '../pages/events/events';
import {EventDetailsPage} from '../pages/event-details/event-details';
import {TrombinoscopePage} from '../pages/trombinoscope/trombinoscope';
import {UserDetailsPage} from '../pages/user-details/user-details';
import {ProfilePage} from '../pages/profile/profile';
// import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiProvider} from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp, WelcomePage, HomePage,
    // TabsPage,
    MondayMailPage,
    EventsPage,
    EventDetailsPage,
    TrombinoscopePage,
    UserDetailsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule, ComponentsModule, HttpModule, IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, WelcomePage, HomePage, MondayMailPage,
    // TabsPage,
    EventsPage,
    EventDetailsPage,
    TrombinoscopePage,
    UserDetailsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Keyboard,
    ScreenOrientation,
    ConfigService,
    AuthService,
    CallNumber,
    SMS,
    EmailComposer,
    Contacts,
    FileTransfer,
    FileTransferObject,
    Calendar,
    Geolocation,
    ApiProvider
  ]
})
export class AppModule {}