import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loader', [
      state('show', style({ display: 'unset' })),
      state('hide', style({ display: 'none' })),
      transition('hide <=> show', [
        animate('0.1s')
      ])
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  employees;
  paginatedEmployees;
  pagesNumber = 0;
  pages;
  currentPage = 0;
  state = 'show';

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(value => {
      this.employees = value;

      this.paginatedEmployees = this.employees.slice(this.currentPage * 10, 10);

      this.pagesNumber = Math.ceil(this.employees.length / 10);

      this.pages = Array(this.pagesNumber).fill(0).map((x, i) => i);

      this.route.queryParams.subscribe(val => {
        this.currentPage = val.page ? val.page : this.currentPage;
        this.paginatedEmployees = this.employees.slice(this.currentPage * 10, this.currentPage * 10 + 10);
      });
    });
  }
}
