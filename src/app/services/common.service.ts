import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employeeData: Subject<Employee> = new Subject<Employee>();
  serviceBaseUrl = environment.serviceBaseUrl
  employees: Employee[]
  constructor(private httpClient: HttpClient) {
  }

  getEmployees() {
    return this.httpClient.get('assets/data/employees.json');
  }

  setEmployees(employees: Employee[]) {
    this.employees = employees
  }

  getEmployeeData() {
    return this.employees
  }
}
