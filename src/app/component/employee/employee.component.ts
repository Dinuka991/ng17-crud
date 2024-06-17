import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'] // Corrected the typo in 'styleUrls'
})
export class EmployeeComponent {

  constructor(private formBuilder: FormBuilder) {}

  employeeForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]], // Added email validator
    phone: ['', Validators.required], // Added required validator for phone
    address: ['', Validators.required] // Corrected the validator for address
  });

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
