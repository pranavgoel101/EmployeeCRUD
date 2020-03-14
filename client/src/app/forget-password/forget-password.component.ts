import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword : FormGroup;
  email = ''
  pass = ''
  conpass = ''
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.forgetpassword = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
      conpass: ['', Validators.required]
  });
  }
  forgetpass() {
    const data = {
      email: this.forgetpassword.get('email').value,
      pass: this.forgetpassword.get('pass').value,
      };

    this.http.post('http://localhost:3000/user/forgetpassword', data).subscribe((response: any) => {

      console.log(response);
      alert('Forget Password Successful');

    }, (error) => {

      console.log(error);
      alert('Forget Password Failed');

    });
  }
}

