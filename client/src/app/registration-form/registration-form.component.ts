import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  passcheck = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      ConfirmpassWord: ['',Validators.required]
    });
  }
  isPassMatch(){
  if (this.registrationForm.get('passWord').value == this.registrationForm.get('ConfirmpassWord').value) {
    return true;
  } else {
    this.passcheck = true;
    return false;
  }
  }
  clearerror()
  {
    this.passcheck = true;
  }
    registration() {

      if(this.isPassMatch()){
      const data = {
        userName: this.registrationForm.get('userName').value,
        passWord: this.registrationForm.get('passWord').value
      };
      console.log('data',data)

      this.http.post('http://localhost:3000/user/signup', data).subscribe((response: any) => {

        console.log(response);
        alert('Registration Successful');

      }, (error) => {

        console.log(error);
        alert('Registration Failed');

      });
    }
  }
  }


