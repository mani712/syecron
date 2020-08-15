import { Injectable } from '@angular/core';
import { Credential } from './model/credential';
import { from, Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(user: Credential): Observable<string> {

    if (user.email === 'user1' && user.password === 'pa$$w0rd') {
      console.log('login sucess');
      return from(['1234cxsty']);
    } else {
      console.log('login fail');
      return from([]);
    }
  }

  logout() {

  }
}
