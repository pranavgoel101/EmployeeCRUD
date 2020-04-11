import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentauthService {

  private url =  'http://localhost:3000/student';
  constructor(private http: HttpClient) { }
  add(data) {
    return this.http.post(this.url + '/add', data);
  }
  displayall() {
     return this.http.get(this.url + '/displayall');
  }
  delete(id) {
    return this.http.delete(this.url + `/delete/${id}`);
  }
  update(data) {
    return this.http.post(this.url + '/update', data);
  }
}
