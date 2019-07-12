import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface IEmploee {
  id: string,
  employee_name: string,
  employee_salary: string,
  employee_age: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private host = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`;
    return this.http
      .get(url)
      .pipe(map((employees: IEmploee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          }
        })
      }));
  }

  register(employee) {
    const url = `${this.host}/create`;
    let newEmployee;

    return this.http.post(url, employee);
  }

  getEmployee(id) {
    const url = `${this.host}/employee/${id}`;

    return this.http.get(url).pipe(map((employee: IEmploee) => {
      return {
        id: employee.id,
        name: employee.employee_name,
        salary: employee.employee_salary,
        age: employee.employee_age
      }
    }));
  }

  update(id, employee) {
    const url = `${this.host}/update/${id}`;

    return this.http.put(url, employee);
  }

  delete(id) {
    const url = `${this.host}/delete/${id}`;

    return this.http.delete(url);
  }
}
