import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  form;
  newEmployee

  constructor(
    fb: FormBuilder, 
    private employeesService: EmployeesService,
    private routee: Router) {
    this.form = fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const employee = {
      name: this.form.get('name').value,
      salary: this.form.get('salary').value,
      age: this.form.get('age').value
    }

    this.employeesService.register(employee)
    .subscribe(res => {
      this.newEmployee = res;

      this.routee.navigate(['/employees']);
    });
  }

}
