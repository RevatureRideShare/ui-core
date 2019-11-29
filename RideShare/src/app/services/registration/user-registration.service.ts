import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

  user: User
  password: string
  response: any

  
  registerUser(user: User, password: string) {
    return this.http.post('register-user', {user, password});
  
  }

  constructor(private router: Router, private http: HttpClient)  { }
}

/* registerUser(user: User, password: string) {
  let observer = this.http.post('register-user', {user, password})
  observer.subscribe((response) => {
    this.response = response;
    return response;
  });

  return this.response;
}

constructor(private router: Router, private http: HttpClient)  { } */