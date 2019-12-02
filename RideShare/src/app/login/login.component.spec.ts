import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<{
    currentUser: User;
    allUsers: Array<User>;
    loading: boolean;
    error: Error;
  }>;

  const initialState = {
    currentUser: undefined,
    allUsers: [],
    loading: false,
    error: undefined
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [HttpClient, provideMockStore({ initialState })]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to RideShare'
    );
  });

  it('should contain email input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#email').name).toContain('email');
  });

  it('should contain password input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#password').name).toContain('password');
  });

  it('should contain login button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form>input').name).toContain('login');
  });

  it('should contain register button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form>button').name).toContain('register');
  });

  it('should call onLogin method', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#login');
    spyOn(component, 'onLogin');
    compiled.click();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('should call onRegister method', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector(
      '#register'
    );
    spyOn(component, 'onRegister');
    compiled.click();
    expect(component.onRegister).toHaveBeenCalled();
  });
});
