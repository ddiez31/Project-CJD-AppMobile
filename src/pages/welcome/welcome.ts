import {Component} from '@angular/core';
import {Nav, MenuController, LoadingController, ToastController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ConfigService} from '../../services/config.service';
import {AuthService} from '../../services/auth.service';

import {HomePage} from './../home/home';

@Component({selector: 'page-welcome', templateUrl: 'welcome.html'})
export class WelcomePage {
  private loginForm : FormGroup;
  submitAttempt : boolean = false;

  constructor(public nav : Nav, public authService : AuthService, private configService : ConfigService, public menuCtrl : MenuController, public loadingCtrl : LoadingController, private formBuilder : FormBuilder, private toastCtrl : ToastController) {
    /*     configService.setDebug('warn', '###', 'WARN');
    configService.setDebug('log', '###', 'LOG');
    configService.setDebug('debug', '###', 'DEBUG');
    configService.setDebug('info', '###', 'INFO');
    configService.setDebug('trace', '###', 'TRACE'); */

    const token = localStorage.clear();

    // Validate email and password format
    this.loginForm = this
      .formBuilder
      .group({
        email: [
          '', Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          '', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(6),
            Validators.required
          ])
        ]
      });

  }

  ionViewDidLoad() {
    this
      .menuCtrl
      .enable(false);
  }

  login() {
    let loading = this
      .loadingCtrl
      .create({spinner: 'dots', content: `Contrôle d'accès`, duration: 600});
    loading.present();
    this
      .authService
      .login(this.loginForm.value)
      .subscribe(res => setTimeout(() => {
        //Enabled sidemenu
        this
          .menuCtrl
          .enable(true);
        this
          .nav
          .setRoot(HomePage, {}, {animate: false});
      }, 1000),
      // Reset input values
      (error) => {
        this
          .loginForm
          .reset();
        let errorToast = this
          .toastCtrl
          .create({message: 'Email et/ou Mot de passe erroné(s)', duration: 2000})
        errorToast.present();
      })
  };

}