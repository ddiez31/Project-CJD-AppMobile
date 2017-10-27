import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(public http : Http) {}

  login(credentials) : Observable < any > {
    return this
      .http
      .post('/api/login', JSON.stringify(credentials), this.options);
  }

  loadUsers() : Observable < any > {
    return this
      .http
      .get('/api/users')
      .map((res) => res.json());
  }

  loadRegions() : Observable < any > {
    return this
      .http
      .get('/api/regions')
      .map((res) => res.json());
  }

  loadSections() : Observable < any > {
    return this
      .http
      .get('/api/sections')
      .map((res) => res.json());
  }

  retrieveSections(section) : Observable < any > {
    return this
      .http
      .get(`/api/sections/${section.id}`)
      .map((res) => res.json());
  }

  getUser(user) : Observable < any > {
    return this
      .http
      .get(`/api/users/${user.id}`)
      .map((res) => res.json());
  }

  editUser(user) : Observable < any > {
    return this
      .http
      .put(`/api/users/${user.id}`, JSON.stringify(user), this.options);
  }

}
