import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavbarOuterComponent } from '../navbar-outer/navbar-outer.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
        ],
      declarations: [ RegistrationComponent,
      NavbarOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain email input', () =>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#email').name).toContain("email");
  });

  it('should contain password input', () =>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#password').name).toContain("password");
  });

  it('should call onBack method', ()=>{
    const compiled = fixture.debugElement.nativeElement.querySelector('#backtologin');
    spyOn(component, "onBack");
    compiled.click();
    expect(component.onBack).toHaveBeenCalled();
  });

  it('should call onRegister method', ()=>{
    const compiled = fixture.debugElement.nativeElement.querySelector('#register');
    spyOn(component, "onRegister");
    compiled.click();
    expect(component.onRegister).toHaveBeenCalled();
  });
});
