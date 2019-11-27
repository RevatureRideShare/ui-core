import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginService } from '../services/LoginService/login.service';

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
  userEmail: '';

  /**
   * Password to log in with
   */
  userPassword: '';

  /**
   * Will be used to hide elements of the navbar
   */
  elemProfile = document.getElementById('profile');
  elemLogout = document.getElementById('logout');

  /**
   * Used to store the results of the http request
   */
  data: any;

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
    this.loginService
      .login(this.userEmail, this.userPassword)
      .subscribe(data => this.data);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    /**Will be used to hide elements of the navbar */
    //this.elemProfile.style.visibility = 'hidden';
    //this.elemLogout.style.visibility = 'hidden';
  }
}
