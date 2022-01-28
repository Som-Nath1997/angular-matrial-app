import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Injectable()
export class SidenavService {
  setSidenav: any;
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get('https://mocki.io/v1/5d30a897-6df8-4f13-99ad-e601ef1ac89c');
  }
}
