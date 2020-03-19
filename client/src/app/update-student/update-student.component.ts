import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudentForm: FormGroup;
  public studId = ' ';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    f
    this.updateStudentForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.studId = id;
  }
  update() {
    const data = {
      id : this.studId,
      fname: this.updateStudentForm.get('fname').value,
      lname: this.updateStudentForm.get('lname').value,
      phone: this.updateStudentForm.get('phone').value,
      address: this.updateStudentForm.get('address').value,
      email: this.updateStudentForm.get('email').value,
      pass : this.updateStudentForm.get('pass').value,
    };
    console.log('data', data );

    this.http.post('http://localhost:3000/student/update', data).subscribe((response: any) => {

      console.log(response);
      alert('Update Successful');
      this.router.navigate(['/homepage'])
    }, (error) => {

      console.log(error);
      alert('Update Failed');

    });

  }

}
