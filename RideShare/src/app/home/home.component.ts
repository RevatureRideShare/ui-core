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
  currUser: Observable<User>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.currUser = this.store.select(store => store['allUsers'].currentUser);
  }
}
