import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Userdata } from '../../interface/common';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  showHeader = new BehaviorSubject<boolean>(false);

  userData: Userdata[] = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      role: 'admin',
      password: '123456'
    },
    {
      username: 'user',
      email: 'user@gmail.com',
      role: 'user',
      password: '12345'
    }
  ]

  constructor() { }

  public checkLogin(data: { email: string, password: string }): Observable<any> {
    return of(
      this.userData.find(
        (user: Userdata) => {
          return user.email === data.email && user.password === data.password
        }
      )
    )
  }

  public isLogin() {
    return localStorage.getItem('email')
  }
}
