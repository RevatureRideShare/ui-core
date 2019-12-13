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
   * Contains an observable to the list of drivers in the store.
   */
  allDrivers: Observable<Array<User>>;

  /**
   * Contains the data within the driver list to be able to sort/filter/paginate.
   */
  dataSource = new MatTableDataSource<User>();

  /**
   * Contains all of the fields the mat-table will display for each driver.
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
   * Grabs the list of drivers within the store onInit the component
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
