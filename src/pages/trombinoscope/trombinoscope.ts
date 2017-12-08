import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import {NavController, ToastController, NavParams, Item, ItemSliding} from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {CallNumber} from '@ionic-native/call-number';
import {SMS} from '@ionic-native/sms';
import {EmailComposer} from '@ionic-native/email-composer';

import {UserDetailsPage} from '../user-details/user-details';
import {IpAddress} from '../../data/ipaddress.db';

@Component({selector: 'page-trombinoscope', templateUrl: 'trombinoscope.html'})

export class TrombinoscopePage {
  private ipAddress = IpAddress[0];

  user = {};
  users = [];
  region = {};
  regions = [];
  section = {};
  sections = [];
  usersAvatar = [];

  regionTmp : string = 'All';
  isRegion : boolean = false;
  sectionCJD : boolean = true;
  sectionTmp : string = 'All';
  isSection : boolean = false;
  val : string = '';
  searchQuery : string = '';
  activeItemSliding : ItemSliding = null;

  constructor(public navCtrl : NavController, public http : Http, public navParams : NavParams, public apiProvider : ApiProvider, private toastCtrl : ToastController, private callNumber : CallNumber, private sms : SMS, private emailComposer : EmailComposer) {
    this.initializeUsers();
    this.initializeRegions();
    this.initializeSections();
  }

  initializeUsers() {
    this
      .apiProvider
      .loadUsers()
      .subscribe(users => this.users = users, err => console.log(err), () => (this.users.forEach((data) => {
        if (data.avatar !== null) {
          this
            .usersAvatar
            .push(data.avatar.replace('localhost', this.ipAddress));
        } else {
          this
            .usersAvatar
            .push(data.avatar);
        };
      }), console.log('users loaded')));
  }

  initializeRegions() {
    this
      .apiProvider
      .loadRegions()
      .subscribe(regions => this.regions = regions, err => console.log(err), () => console.log('regions loaded'));
    this.region = this.regionTmp;
  }

  initializeSections() {
    this
      .apiProvider
      .loadSections()
      .subscribe(sections => this.sections = sections, err => console.log(err), () => console.log('sections loaded'));
    this.sectionTmp = 'All';
    this.section = this.sectionTmp;
  }

  retrieveSections(section) {
    this
      .apiProvider
      .retrieveSections(section)
      .subscribe(sections => this.sections = sections, err => console.log(err), () => console.log('sections loaded'));
  }

  getUsers(ev : any) {
    // set val to the value of the searchbar
    this.val = ev.target.value;
    // filter items with the selected region
    this.isRegion = true;
    // this.regionSelect(this.regionTmp);
    if (this.regionTmp === 'All') {
      // Reset items backto all of the items
      //
      //this.initializeUsers();
      this.filterUsers(this.val);
      this.isRegion = false;
    } else {
      this.filterUsers(this.val);
      this.isRegion = false;
    }
  }

  // View selected filter users
  filterUsers(val) {
    //if the value is an empty string don't filter the items
    (val && val.trim() != '')
      ? this.users = this
        .users
        .filter((user : any) => {
          return (user.last_name.toLowerCase().indexOf(val.toLowerCase()) > -1 || user.first_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      : this.initializeUsers();

  }

  // View selected region filter user
  regionSelect(region : string) : void {
    this.initializeUsers();
    // set val the value of the searchbar to empty on region change event
    if (!this.isRegion) {
      this.searchQuery = '';
    }
    (region === 'All')
      ? [
        this.initializeUsers(),
        this.initializeSections(),
        this.sectionCJD = true,
        this.section = this.sectionTmp,
        this.regionTmp = region
      ]
      : this
        .regions
        .forEach((section) => {
          if (region === section.name) {
            this.retrieveSections(section);
            this.sectionTmp = 'All';
          }
        });
    this.sectionCJD = false;
    this.regionTmp = region;
    this.section = this.sectionTmp;
    this.users = this
      .users
      .filter(users => users.region === region);
  };

  // // View selected section filter user
  sectionSelect(section : string) : void {
    this.initializeUsers();
    // set val the value of the searchbar to empty on region change event
    if (!this.isSection) {
      this.searchQuery = '';
    };
    (section === 'All')
      ? [
        this.initializeUsers(),
        this.sectionTmp = section
      ]
      : this.sectionCJD = false;
    this.sectionTmp = section;
    this.users = this
      .users
      .filter(users => users.section === section);
  };

  // Call selected user
  callNbr(number) {
    this
      .callNumber
      .callNumber(number, true)
      .then((result) => {
        let successToast = this
          .toastCtrl
          .create({message: "Appel en cours! :)", duration: 2000})
        successToast.present();
      }, (error) => {
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur d'appel. :(", duration: 2000})
        errorToast.present();
      });
  }

  // Send sms to selected user
  sendSmsNbr(number) {
    let options = {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this
      .sms
      .send(number, '', options)
      .then((result) => {
        let successToast = this
          .toastCtrl
          .create({message: "Message envoyé! :)", duration: 2000})
        successToast.present();
      }, (error) => {
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur d'envoi de message. :(", duration: 2000})
        errorToast.present();
      });
  }

  // Open email editor at selected user mail
  sendMail(addressMail) {
    this
      .emailComposer
      .isAvailable()
      .then((available : boolean) => {
        if (available) {
          //Now we know we can send
        }
      });
    let email = {
      to: addressMail,
      isHtml: true
    };
    // Send a text message using default options
    this
      .emailComposer
      .open(email);
  }

  // View selected user details
  userDetails(user, userAvatar) {
    this
      .navCtrl
      .push(UserDetailsPage, {
        user: user,
        userAvatar: userAvatar
      });
  }

  // Option slide with click event
  openOption(itemSlide : ItemSliding, item : Item) {
    if (this.activeItemSliding !== null) //use this if only one active sliding item allowed
      this.closeOption();
    this.activeItemSliding = itemSlide;

    let swipeAmount = 250;
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);
    itemSlide.setElementClass('active-options-right', true);
    itemSlide.setElementClass('active-swipe-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  closeOption() {
    if (this.activeItemSliding) {
      this
        .activeItemSliding
        .close();
      this.activeItemSliding = null;
    }
  }

}
