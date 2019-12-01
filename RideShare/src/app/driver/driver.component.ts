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
  /**
   * allDrivers contains an observable to the list of drivers in the store.
   */
  allDrivers: Observable<Array<User>>;

  /**
   * dataSource contains the data within the driver list to be able to sort/filter/paginate.
   */
  dataSource = new MatTableDataSource<User>();

  /**
   * displayedColumns contains all of the fields the mat-table will display for each driver.
   */
  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'houseLocationName',
    'carSeats'
  ];

  constructor(private store: Store<IAppState>) {}

  /**
   * ngOnInit() grabs the list of drivers within the store.
   * Once allDrivers has received its values, it gives them to dataSource and filters by DRIVER
   */
  ngOnInit() {
    this.allDrivers = this.store.select(store => store['allUsers'].allUsers);
    this.store.dispatch(new LoadAllDriversAction());
    this.allDrivers.subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.filter = 'DRIVER';
    });
  }
}
