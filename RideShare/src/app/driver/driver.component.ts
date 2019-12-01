import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';
import { LoadAllDriversAction } from '../store/actions/all-users.actions';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  allDrivers: Observable<Array<User>>;
  dataSource = new MatTableDataSource<User>();

  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'houseLocationName',
    'carSeats'
  ];

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.allDrivers = this.store.select(store => store['allUsers'].allUsers);
    this.store.dispatch(new LoadAllDriversAction());
    this.allDrivers.subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.filter = 'DRIVER';
    });
  }
}
