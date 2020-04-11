import { UserauthService } from './../userauth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private userauthservice : UserauthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      pass: ['', Validators.required]
    });
  }


  login() {

    const data = {
      email: this.loginForm.get('email').value,
      pass: this.loginForm.get('pass').value
    };

    this.userauthservice.login(data).subscribe((response: any) => {
      localStorage.setItem('token',response.token)
      console.log(localStorage)
      console.log(response);
      alert('Login Successful');
      this.router.navigate(['/homepage']) ;
    }, (error) => {

      console.log(error);
      alert('Login Failed');

    });
  }

}
