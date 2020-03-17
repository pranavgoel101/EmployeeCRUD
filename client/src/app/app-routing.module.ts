import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomePageComponent } from './home-page/./home-page.component';
import { AddStudentComponent } from './add-student/./add-student.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'forgetpassword' , component : ForgetPasswordComponent},
  { path: 'homepage',component : HomePageComponent},
  { path: 'add-student',component : AddStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
