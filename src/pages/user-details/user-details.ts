import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts';

@Component({selector: 'page-user-details', templateUrl: 'user-details.html'})

export class UserDetailsPage {
  user;
  userAvatar;

  constructor(public navCtrl : NavController, public navParams : NavParams, private contacts : Contacts, private toastCtrl : ToastController) {
    this.user = navParams.get('user');
    this.userAvatar = navParams.get('userAvatar');
  }

  registerUser() {
    let contact : Contact = this
      .contacts
      .create();
    contact.name = new ContactName(null, this.user['lastName'], this.user['firstName']);
    contact.phoneNumbers = [new ContactField('Mobile', this.user['phone'])];
    contact.emails = [new ContactField('E-mail', this.user['mail'])];
    contact
      .save()
      .then((result) => {
        let successToast = this
          .toastCtrl
          .create({message: "Contact ajouté! :)", duration: 2000})
        successToast.present();
      }, (error) => {
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur de sauvegarde du contact. :(", duration: 2000})
        errorToast.present();
      });
  }

}
