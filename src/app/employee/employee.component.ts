import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee = {
    id: '',
    name: '',
    salary: '',
    age: ''
  };
  form;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(val => {
      const id = val.get('id');

      this.employeesService.getEmployee(id).subscribe(val => {
        this.employee = val;

        this.form.controls.name.setValue(this.employee.name)
        this.form.controls.salary.setValue(this.employee.salary)
        this.form.controls.age.setValue(this.employee.age)
      });


    });
  }

  onSubmit() {
    const newEmployee = {
      name: this.form.get('name').value,
      salary: this.form.get('salary').value,
      age: this.form.get('age').value
    }

    this.employeesService.update(this.employee.id, newEmployee)
      .subscribe((res: any) => {
        this.employee.age = res.age;
        this.employee.name = res.name;
        this.employee.salary = res.salary;

        this.route.navigate(['/employees']);
      });
  }

  onDelete() {
    this.employeesService.delete(this.employee.id)
    .subscribe(res => {
      this.route.navigate(['/employees']);
    })
  }
}
