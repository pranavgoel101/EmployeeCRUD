import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  homepageForm: FormGroup;
  studentlist = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router : Router
    ) { }

    addstudent() {
      this.router.navigate(['/add-student'])
    }
  ngOnInit() {
    this.http.get('http://localhost:3000/student/displayall').subscribe((response: any) => {
      this.studentlist = response.student;
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

  delete(id) {
    this.http.delete(`http://localhost:3000/student/delete/${id}`).subscribe((response: any) => {
      alert(response.msg);
      this.router.navigate(['/homepage']);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

  update(id) {
    this.router.navigate(['/update-student', id]);
  }
  }


