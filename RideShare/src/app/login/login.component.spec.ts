import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavbarOuterComponent } from '../navbar-outer/navbar-outer.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [LoginComponent,
        NavbarOuterComponent],
      providers: [HttpClient]
    })
      .compileComponents();
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
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to RideShare');
  });

  it('should contain email input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#email').name).toContain("email");
  });

  it('should contain password input', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#password').name).toContain("password");
  });

  it('should call onLogin method', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#login');
    spyOn(component, "onLogin");
    compiled.click();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('should call onRegister method', () => {
    const compiled = fixture.debugElement.nativeElement.querySelector('#register');
    spyOn(component, "onRegister");
    compiled.click();
    expect(component.onRegister).toHaveBeenCalled();
  });


});
