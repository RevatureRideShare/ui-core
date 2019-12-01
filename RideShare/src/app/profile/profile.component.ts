import { Component, OnInit } from '@angular/core';
import { User, RideStatus, Role } from '../models/user.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';
import { Observable } from 'rxjs';
import { UpdateUserAction } from '../store/actions/all-users.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  user: User;
  currentUser: Observable<User>;
  rideStatus: RideStatus;
  role: Role;

  constructor(private store: Store<IAppState>) {
    this.user = new User();
  }
/* we use the store to load the current user state referencing it by name with the appState array. the all users
value is contains the current user */
  ngOnInit() {
    this.currentUser = this.store.select(
      store => store['allUsers'].currentUser
    );
    this.loading$ = this.store.select(store => store['currentUser'].loading);
    this.error$ = this.store.select(store => store['currentUser'].error);
  }
/* we call the upDateDriver action which takes a single user object as its payload */
  updateDriverStatus(user: User) {
    this.store.dispatch(
      new UpdateUserAction(user)
    );
  }
}
