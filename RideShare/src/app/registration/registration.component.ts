import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';


/**
 * This component is responsible for registering new users
 */
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /** 
   * The email to be used to log in
   */
  email: ""

  /**
   * User's password 
   */
  password: ""
  //fullName: ""
  
  /** 
   * String used for string interpolation 
   */
  backtologin = "Back to login";

  /** 
   * String used for string interpolation 
   */
  register = "register";
  response: string;

  constructor(
    private route: ActivatedRoute,
  private router: Router,
  private http: HttpClient
  ) { }
    /*
  elemProfile = document.getElementById('profile');
  elemLogout = document.getElementById('logout');
    */
  ngOnInit() {
    /*
    this.elemProfile.style.visibility = "hidden";
    this.elemLogout.style.visibility = "hidden";
    */
  }

  /**
   * Takes user back to login
   */
  onBack(): void {
    this.router.navigate(['']);
  }

  /**
   * Registers user in the system
   */
  onRegister(): void {
    /*
    let url = 'http://localhost:8080/LightHouse/register';
    let result = this.http.post<ControllerResponse>(url, {
      username: this.username,
      password: this.password,
      fullName: this.fullName,
      emailName: this.emailName
      
    }).subscribe(cr => {
      if (cr.response === "registered") {
        console.log("Response: " + cr.response);
        sessionStorage.setItem(
          'token',
          btoa(this.username + ":" + this.password)
        );
        this.router.navigate(['home']);
      } else {
        console.log("Response: " + cr.response);
        this.response = cr.response;
        //alert("Registration failed.");
      }
    });
    */
  }
  
}
