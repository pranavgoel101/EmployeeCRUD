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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router : Router
    ) { }

  ngOnInit() {
  }
  addstudent() {
    this.router.navigate(['/add-student'])
  }

}
