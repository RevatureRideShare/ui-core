import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userTelephone: string;
  userAccessLevel: string;
  userCode: string;
  userBiography: string;
  response: any;

  registerUser(userFirstName, userLastName, userEmail, userPassword, userTelephone, userAccessLevel, userCode, userBiography, workType) {
    let observer = this.http.post('register-user', {firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword, userTelephone: userTelephone, accessLevel: userAccessLevel, userCode: userCode, userBiography: userBiography, workType: workType})
    observer.subscribe((response) => {
      this.response = response;
      return response;
    });

    return this.response;
  }

  constructor(private router: Router, private http: HttpClient)  { }
}