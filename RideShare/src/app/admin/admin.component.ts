import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';
import {
  LoadAllUsersAction,
  UpdateUserAction
} from '../store/actions/all-users.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  /**
   * Contains an observable to the list of users in the store.
   */
  allUsers: Observable<Array<User>>;
  
  /**
   * Contains all of the fields the mat-table will display for each driver.
   */
  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'houseLocationName',
    'role',
    'accountStatus'
  ];

  /**
   * Dispatches an UpdateUserAction to update the user with NgRx
   * @param user User to update accountStatus value.
   */
  updateUser(user: User) {
    this.store.dispatch(new UpdateUserAction(user));
  }

  constructor(private store: Store<IAppState>) {}

  /**
   * Grabs the list of users within the store onInit the component
   */
  ngOnInit() {
    this.allUsers = this.store.select(store => store['allUsers'].allUsers);
    this.store.dispatch(new LoadAllUsersAction());
  }
}
