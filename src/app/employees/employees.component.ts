import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$;
  pages = 0;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();

    this.employees$.subscribe(items => {
      this.pages = items / 10;
    });
  }
}
