import {Component} from '@angular/core';
import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';

import {ApiProvider} from '../../providers/api/api';
import {JwtHelper} from 'angular2-jwt';

@Component({selector: 'page-profile', templateUrl: 'profile.html'})
export class ProfilePage {
  private ipAddress = '192.168.31.144';

  private URL = 'http://' + this.ipAddress + ':3000/api/upload';
  private urlPublic = 'http://' + this.ipAddress + ':3000/uploads/';

  hidden : boolean = true;
  imageURI : any;
  imageFileName : any;
  jwtHelper : JwtHelper = new JwtHelper();
  private currentUser = {
    id: '',
    email: ''
  };
  user = {};
  userAvatar;

  constructor(public navCtrl : NavController, public apiProvider : ApiProvider, public loadingCtrl : LoadingController, public toastCtrl : ToastController, private transfer : FileTransfer) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
    this.initializeUserProfile();
  }

  decodeUserFromToken(token) {
    return this
      .jwtHelper
      .decodeToken(token)
      .user;
  }

  setCurrentUser(user) {
    this.currentUser.id = user.id;
    this.currentUser.email = user.email;
  }

  initializeUserProfile() {
    this
      .apiProvider
      .getUser(this.currentUser)
      .subscribe(user => this.user = user, err => console.log(err), () => (this.userAvatar = this.user['avatar'].replace('localhost', this.ipAddress), console.log('user profile loaded')));
  }

  uploadFile() {
    const fileTransfer : FileTransferObject = this
      .transfer
      .create();
    let options : FileUploadOptions = {
      fileKey: 'file',
      fileName: 'file',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    fileTransfer
      .upload(this.imageFileName, this.URL, options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        this.imageFileName = this.urlPublic + 'file.jpg';
        let successToast = this
          .toastCtrl
          .create({message: "Image envoyée! :)", duration: 2000})
        successToast.present();
      }, (err) => {
        console.log(err);
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur d'envoi image. :(", duration: 2000})
        errorToast.present();
      })
      .catch(e => console.log(e));
  }

  updateUser(user) {
    this.hidden = false;
  }

  register(user) {
    this
      .apiProvider
      .editUser(user)
      .subscribe(res => {
        let loading = this
          .loadingCtrl
          .create({spinner: 'dots', content: `Enregistrement`, duration: 1400});
        loading.present();
        setTimeout(() => {
          this.hidden = true;
        }, 1800);
        this.user = user;
        let successToast = this
          .toastCtrl
          .create({message: "Modification enregistrée! :)", duration: 2000})
        successToast.present();
        setTimeout(() => {
          this.initializeUserProfile();
        }, 10);
      }, error => {
        console.log(error);
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur de modification. :(", duration: 2000})
        errorToast.present();
      });
  }

}
