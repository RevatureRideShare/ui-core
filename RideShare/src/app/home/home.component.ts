import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Role, RideStatus } from '../models/user.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * currUser contains the current logged in user from the store.
   */
  currUser: Observable<User>;

  constructor(private store: Store<IAppState>) {}

  /**
   * ngOnInit() grabs the currUser from the store.
   */
  ngOnInit() {
    this.currUser = this.store.select(store => store['allUsers'].currentUser);
  }
}
