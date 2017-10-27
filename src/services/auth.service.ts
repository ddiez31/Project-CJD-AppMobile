import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';

import {ApiProvider} from '../providers/api/api';

@Injectable()
export class AuthService {
  private isLoggedIn = false;
  jwtHelper : JwtHelper = new JwtHelper();
  private currentUser = {
    id: '',
    email: ''
  };

  constructor(private apiProvider : ApiProvider) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    return this
      .apiProvider
      .login(emailAndPassword)
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.isLoggedIn;
      });
  }

  decodeUserFromToken(token) {
    return this
      .jwtHelper
      .decodeToken(token)
      .user;
  }

  setCurrentUser(user) {
    this.isLoggedIn = true;
    this.currentUser.id = user.id;
    this.currentUser.email = user.email;
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = {
      id: '',
      email: ''
    };
    const token = localStorage.clear();
  }

}
