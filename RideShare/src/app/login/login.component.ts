import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';
import { LoginUserAction } from '../store/actions/all-users.actions';

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
  email: '';

  /**
   * Password to log in with
   */
  password: '';

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
  onLogin(): void {
    console.log('in login');
    console.log('email: ' + this.email + ' password: ' + this.password);
    this.store.dispatch(
      new LoginUserAction({ email: this.email, password: this.password })
    );
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //this.elemProfile.style.visibility = 'hidden';
    //this.elemLogout.style.visibility = 'hidden';
  }
}
