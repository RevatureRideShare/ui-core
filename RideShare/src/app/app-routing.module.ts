import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class AppRoutingModule {}
export const routing = RouterModule.forRoot(appRoutes);
