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
  allUsers: Observable<Array<User>>;

  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'houseLocationName',
    'role',
    'accountStatus'
  ];

  updateUser(user: User) {
    this.store.dispatch(new UpdateUserAction(user));
  }

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.allUsers = this.store.select(store => store['allUsers'].allUsers);
    this.store.dispatch(new LoadAllUsersAction());
  }
}
