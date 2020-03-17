import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private router : Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  login() {
    const data = {
      email: this.loginForm.get('email').value,
      pass: this.loginForm.get('pass').value
    };

    this.http.post('http://localhost:3000/user/login', data).subscribe((response: any) => {

      console.log(response);
      alert('Login Successful');
      this.router.navigate(['/homepage']) ;
    }, (error) => {

      console.log(error);
      alert('Login Failed');

    });
  }

}
