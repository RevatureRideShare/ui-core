import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';

/**
 * Login page
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Title of the page
   */
  title = 'Welcome to RideShare';

  /** 
   * Email to log in with
   */
  email: ""

  /**
   * Password to log in with
   */
  password: ""


  response: string;

  /*
  elemProfile = document.getElementById('profile'); 
  elemLogout = document.getElementById('logout');
  */

  /** 
   * Takes user to registration page
   */
  onRegister(): void {
    this.router.navigate(['registration']);
  }

  /**
   * Logs user in
   */
  onLogin(): void {
    /*
    let url = 'http://localhost:8080/LightHouse/login';
    let result = this.http.post<ControllerResponse>(url, {
      username: this.username,
      password: this.password
    }).subscribe(cr => {
      if (cr.response === "success") {
        console.log("Response" + cr.response);
        sessionStorage.setItem(
          'user', this.username
        ); 
        console.log("User: " + sessionStorage.getItem('user'));
        this.router.navigate(['home']);
      } else {
        console.log("Response" + cr.response);
        this.response = cr.response;
        //alert("Authentication failed.");
      }
    });
    */
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient


  ) { }

  ngOnInit() {
    /*
    this.elemProfile.style.visibility = "hidden";
    this.elemLogout.style.visibility = "hidden";
    */
  }

}
