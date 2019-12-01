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
  active: boolean;

  constructor(private store: Store<IAppState>) {
    this.user = new User();
  }

  ngOnInit() {
    this.currentUser = this.store.select(
      store => store['allUsers'].currentUser
    );
    this.loading$ = this.store.select(store => store['currentUser'].loading);
    this.error$ = this.store.select(store => store['currentUser'].error);

    this.currentUser.subscribe(res => {
      if (res.rideStatus === RideStatus.ACTIVE) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  updateDriverStatus(user: User) {
    if (this.active) {
      user.rideStatus = RideStatus.ACTIVE;
    } else {
      user.rideStatus = RideStatus.INACTIVE;
    }
    this.store.dispatch(new UpdateUserAction(user));
  }
}
