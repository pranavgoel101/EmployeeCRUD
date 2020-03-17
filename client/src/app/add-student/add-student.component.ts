import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  registrationStudentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router : Router
  ) { }
  fname = '';
  lname = '';
  phone = '';
  address = '';
  email = '';
  ngOnInit() {
    this.registrationStudentForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }
  registration() {
    const data = {
      fname: this.registrationStudentForm.get('fname').value,
      lname: this.registrationStudentForm.get('lname').value,
      phone: this.registrationStudentForm.get('phone').value,
      address: this.registrationStudentForm.get('address').value,
      email: this.registrationStudentForm.get('email').value,
      pass : this.registrationStudentForm.get('pass').value,
    };
    console.log('data', data );

    this.http.post('http://localhost:3000/student/add', data).subscribe((response: any) => {

      console.log(response);
      alert('Registration Successful');
      this.router.navigate(['/homepage'])
    }, (error) => {

      console.log(error);
      alert('Registration Failed');

    });
}
}
