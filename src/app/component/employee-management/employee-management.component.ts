import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  title = 'Employee Management'
  activeIndex = 0
  constructor(private readonly commonService: CommonService) { }

  ngOnInit(): void {
    this.activeIndex = localStorage.getItem('activeIndex') ? Number(localStorage.getItem('activeIndex')) : 0
  }

  handleChange(e: any) {
    localStorage.clear()
    localStorage.setItem("activeIndex", e?.index);
    this.activeIndex = e?.index;
  }

  showEditForm(employee: Employee) {
    this.activeIndex = 1
    this.commonService.employeeData.next(employee)
  }

  showViewList(flag: boolean) {
    if (flag) {
      this.activeIndex = 2
    }
  }


}
