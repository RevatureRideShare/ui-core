import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../../app.component';
import { User, Role, RideStatus } from 'src/app/models/user.model';
import { AllUserReducer } from '../all-user.reducers';
import { initialUserState } from '../all-user.reducers';
import {
  LoadAllUsersSuccessAction,
  LoadAllUsersAction,
  LoadAllUsersFailAction,
  UpdateUserAction,
  UpdateUserSuccessAction,
  UpdateUserFailAction
} from '../../actions/all-users.actions';
import { initialLocationState } from '../location.reducers';
import { HouseLocation } from 'src/app/models/houselocation.model';
import { IAppState } from 'src/app/models/states/app-state.model';

xdescribe('all-user reducer ', () => {
  const initialAppState: IAppState = {
    authorization: '',
    userState: initialUserState,
    locationState: initialLocationState
  };
  const user_1 = new User(
    'user_1@email',
    'UserFirst',
    'UserLast',
    '123456789',
    RideStatus.ACTIVE,
    Role.RIDER,
    true,
    new HouseLocation()
  );
  const user_new = new User(
    'user_1@email',
    'NewFirst',
    'NewLast',
    '123456789',
    RideStatus.ACTIVE,
    Role.RIDER,
    true,
    new HouseLocation()
  );
  const user_2 = new User(
    'user_2@email',
    'SecondFirst',
    'SecondLast',
    '123456789',
    RideStatus.ACTIVE,
    Role.RIDER,
    true,
    new HouseLocation()
  );
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: []
    });
  }));

  // test LoadingAllUserAction
  it('should return initialUserState', () => {
    const noAction = new LoadAllUsersAction();
    const newState = AllUserReducer(undefined, noAction);
    const expected = { ...initialUserState, loading: true };
    expect(newState).toEqual(expected);
  });

  // test LoadingAllUserSuccessAction
  it('should add a user to state', () => {
    const action = new LoadAllUsersSuccessAction([user_1]);
    const state = AllUserReducer(undefined, action);
    const expected = { ...initialUserState, allUsers: [user_1] };
    expect(state).toEqual(expected);
  });

  // test LoadAllUsersFailAction
  it('should add error to sate', () => {
    const error = new Error('fail to load user list');
    const action = new LoadAllUsersFailAction(error);
    const state = AllUserReducer(undefined, action);
    const expected = { ...initialUserState, error: error };
    expect(state).toEqual(expected);
  });

  // test UpdateUserAction
  xit('should update a user in state', () => {
    // create original state
    const initAction = new LoadAllUsersSuccessAction([user_1]);
    const initState = AllUserReducer(undefined, initAction);
    // update original state
    const action = new UpdateUserAction(user_new);
    const newState = AllUserReducer(initState, action);
    const expected = { ...initialUserState, allUsers: [user_1], loading: true };
    expect(newState).toEqual(expected);
  });

  // test UpdateUserSuccessAction
  xit('should update a user in state', () => {
    // create original state
    const initAction = new LoadAllUsersSuccessAction([user_1]);
    const initState = AllUserReducer(undefined, initAction);
    // update original state
    const action = new UpdateUserSuccessAction(user_new);
    const newState = AllUserReducer(initState, action);
    const expected = { ...initialUserState, allUsers: [user_new] };
    expect(newState).toEqual(expected);
  });

  // test UpdateUserFailAction
  xit('should add error to state', () => {
    // create original state
    const initAction = new LoadAllUsersSuccessAction([user_1]);
    const initState = AllUserReducer(undefined, initAction);
    // update original state
    const error = new Error('fail to update user');
    const action = new UpdateUserFailAction(error);
    const newState = AllUserReducer(initState, action);
    const expected = { ...initialUserState, allUsers: [user_1], error: error };
    expect(newState).toEqual(expected);
  });
});
