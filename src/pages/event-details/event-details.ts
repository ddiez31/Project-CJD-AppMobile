import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';

import L from "leaflet";
import {Geolocation, Geoposition, GeolocationOptions} from '@ionic-native/geolocation';

import {EventsMock} from './../../models/events.db';
import {UsersMock} from './../../models/users.db';
import * as Users from '../../models/users.db';

const GEOLOCATION_OPTIONS : GeolocationOptions = {
  maximumAge: 3000,
  timeout: 5000,
  enableHighAccuracy: true
};

@Component({selector: 'page-event-details', templateUrl: 'event-details.html'})

export class EventDetailsPage {
  private event = EventsMock;
  private users : Users.UsersModel[];
  private timeStart : Date;
  private timeEnd : Date;
  private createEvent : boolean;
  private removeEvent : boolean;
  private map : L.Map;
  private center : L.PointTuple;
  private positionMarker : L.Marker;
  private positionAccuracyCircle : L.Circle;
  private geolocationSubscription;

  constructor(public navCtrl : NavController, public navParams : NavParams, private toastCtrl : ToastController, private calendar : Calendar, private geolocation : Geolocation) {
    this.event = navParams.get('event');
    this.initializeUsers();
  }

  initializeUsers() {
    this.users = Users.UsersMock;
  }

  ionViewDidLoad() {
    this.loadMap();
    // Convert date and time in UTC format
    let split = this
      .event['date']
      .split('/');
    let reverseDate = [split[2], split[1], split[0]].join('-');
    let time = this
      .event['time']
      .replace('h', ':');
    this.timeStart = new Date(reverseDate + 'T' + time);
    let duration = this
      .event['duration']
      .replace('h', ':');
    let durationHours = duration.split(':')[0];
    let durationMinutes = duration.split(':')[1];
    this.timeEnd = new Date(this.timeStart);
    this
      .timeEnd
      .setHours(this.timeStart.getHours() + parseInt(durationHours));
    this
      .timeEnd
      .setMinutes(this.timeStart.getMinutes() + parseInt(durationMinutes));

    this.createEvent = false;
    this.removeEvent = true;

    // Verify if event registered in calendar device this   .calendar
    // .findEvent(this.event['name'], this.event['address'],
    // this.event['description'], this.timeStart, this.timeEnd)   .then((result) =>
    // {     let successToast = this       .toastCtrl       .create({message:
    // "Evènement présent! :)", duration: 2000})     successToast.present();   },
    // (error) => {     let successToast = this       .toastCtrl .create({message:
    // "Evènement absent! :)", duration: 2000}) successToast.present();   });
  }

  viewCalendar(event) {
    this
      .calendar
      .openCalendar(this.timeStart);
  }

  registerEvent(event) {
    this
      .calendar
      .createEvent(event.name, event.address, event.description, this.timeStart, this.timeEnd)
      .then((result) => {
        let successToast = this
          .toastCtrl
          .create({message: "Evènement ajouté! :)", duration: 2000})
        successToast.present();
        this.createEvent = true;
        this.removeEvent = false;
      }, (error) => {
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur d'ajout de l'évènement. :(", duration: 2000})
        errorToast.present();
      });
  }

  deleteEvent(event) {
    this
      .calendar
      .deleteEvent(event.name, event.address, event.description, this.timeStart, this.timeEnd)
      .then((result) => {
        let successToast = this
          .toastCtrl
          .create({message: "Evènement supprimé! :)", duration: 2000})
        successToast.present();
        this.removeEvent = true;
        this.createEvent = false;
      }, (error) => {
        let errorToast = this
          .toastCtrl
          .create({message: "Erreur de suppression de l'évènement. :(", duration: 2000})
        errorToast.present();
      });
  }

  loadMap() {
    this.center = [this.event['lat'], this.event['lng']];
    this.map = L.map('map', {
      center: this.center,
      zoom: 14,
      zoomControl: false
    });

    L
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 10,
      maxZoom: 17
    })
      .addTo(this.map);

    // create Point
    this.positionMarker = L
      .marker(this.center)
      .addTo(this.map);

  }

}