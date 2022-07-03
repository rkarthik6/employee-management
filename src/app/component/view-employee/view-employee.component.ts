import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employees: any
  @Output() onEditEvent = new EventEmitter<Employee>();
  constructor(private readonly commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees() {
    this.commonService.getEmployees()
      .subscribe((employees: any) => {
        this.employees = employees
        this.commonService.setEmployees(this.employees)
    })
  }

  onRowEditInit(employee: Employee) {
    this.onEditEvent.emit(employee);
  }
}
