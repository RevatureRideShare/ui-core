import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../../app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IAppState } from 'src/app/models/states/app-state.model';
import { IUserState } from 'src/app/models/states/user-state.model';
import { ILocationState } from 'src/app/models/states/location-state.model';
import { User } from 'src/app/models/user.model';
import { RideStatus, Role } from '../../../models/user.model'
import { HouseLocation } from 'src/app/models/houselocation.model';
import { TrainingLocation } from 'src/app/models/traininglocation.model';

describe('all-user reducer ', () => {
  let appStore: IAppState;
  let userStore: IUserState;
  let locationStore: ILocationState;
  const initHouse = new HouseLocation(
    '5th street',
    'apt 1',
    'new york',
    'new york',
    '10001',
    'the 5th street',
    new TrainingLocation('you train here')
  );
  const initUser1 = new User(
        'user1@email.com', 
        'user1_first', 'user2_last',
        '123456789', 
        RideStatus.ACTIVE, 
        Role.RIDER, 
        true, 
        initHouse
    )
    const initUser2 = new User(
        'user2@email.com', 
        'user2_first', 'user2_last',
        '123456789', 
        RideStatus.ACTIVE, 
        Role.RIDER, 
        true, 
        initHouse
    )
    const initialUserState: IUserState = {
        currentUser: initUser1,
        allUsers:[initUser1, initUser2],
        loading: false,
        error: undefined
    }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      
    })
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Project3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'Project3 app is running!'
    );
  });
});
