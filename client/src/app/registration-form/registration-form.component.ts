import { UserauthService } from './../userauth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  passcheck = false;
  fname = '';
  lname = '';
  phone = '';
  address = '';
  email = '';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private userauthservice : UserauthService
    ) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  isPassMatch() {
  if (this.registrationForm.get('passWord').value === this.registrationForm.get('ConfirmpassWord').value) {
    return true;
  } else {
    this.passcheck = true;
    return false;
  }
  }
  clearerror() {
    this.passcheck = true;
  }
    registration() {

      //if(this.isPassMatch()){
      const data = {
        fname: this.registrationForm.get('fname').value,
        lname: this.registrationForm.get('lname').value,
        phone: this.registrationForm.get('phone').value,
        address: this.registrationForm.get('address').value,
        email: this.registrationForm.get('email').value,
        pass : this.registrationForm.get('pass').value,
      };
      console.log('data', data );

      this.userauthservice.register(data).subscribe((response: any) => {
      localStorage.setItem('token',response.token)
      console.log(localStorage)
      console.log(response);
      alert('Registration Successful');
      this.router.navigate(['/login'])
      }, (error) => {

        console.log(error);
        alert('Registration Failed');

      });
    //}
  }
  }

