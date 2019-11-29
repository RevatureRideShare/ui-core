import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserRegistrationService } from '../user-registration.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  userTelephone: string;
  userAccessLevel: string;
  userCode: string;
  userBiography: string;
  workType: string;
  result: any;

  public containers = [0];
  public counter: number = 1;
  svc: UserRegistrationService;
  constructor(svc: UserRegistrationService, private router: Router, private http: HttpClient) { 
    this.svc = svc;
  }

  ngOnInit() {
  }

  register() {
    this.result = this.svc.registerUser(this.userFirstName, this.userLastName, this.userEmail, this.userPassword, this.userTelephone, this.userAccessLevel, this.userCode, this.userBiography, this.workType)
    if (this.result == true) {
      alert("registration successful");
      this.router.navigateByUrl('login');
      return true;
    } else {
      alert("registration failed");
      this.router.navigateByUrl('login');
      return false;
    }
  }

  add() {
    if (this.containers.length < 5) {
      this.containers.push(this.counter);
      this.counter++;
    }
  }


  remove() {
    let element = document.getElementsByClassName('company-code');
    if (this.containers.length > 1) {
      element[this.containers.length - 1].parentNode.removeChild(element[this.containers.length - 1]);
      const index = this.containers.indexOf(this.containers.length - 1, 0);
      if (index > -1) {
        this.containers.splice(index, 1);
        this.counter--;
      }
    }
  }
}
