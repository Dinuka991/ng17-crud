import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ApiService } from '../../api.service';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      contactNumber: ['', Validators.required],
      hireDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
      this.api.submitForm(this.employeeForm.value).subscribe(
        response => {
          console.log('Form success', response);
        },
        error => {
          console.error('Error submitting form', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
