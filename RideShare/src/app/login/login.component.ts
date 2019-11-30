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
  userEmail: '';

  /**
   * Password to log in with
   */
  userPassword: '';

  elemProfile = document.getElementById('profile');
  elemLogout = document.getElementById('logout');

  /**
   * Takes user to registration page
   */
  onRegister(): void {
    this.router.navigate(['registration']);
  }

  /**
   * Logs user in
   */
  onLogin(): void {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //this.elemProfile.style.visibility = 'hidden';
    //this.elemLogout.style.visibility = 'hidden';
  }
}
