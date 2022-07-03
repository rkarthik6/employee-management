import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee
  editEmployee: FormGroup
  showSuccessMsg = false
  submitted = false
  @Output() onUpdateEvent = new EventEmitter<boolean>();
  get employeeFormControl() {
    return this.editEmployee.controls;
  }
  constructor(private fb: FormBuilder, private readonly commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.employeeData.subscribe((employee: Employee) => {
      if (employee) {
        this.employee = employee
        const formData: any = employee
        formData.dob = new Date(formData?.dob)
        this.editEmployee.patchValue(employee)
      }
    })
    this.editEmployeeForm()
  }

  editEmployeeForm() {
    this.editEmployee = this.fb.group({
      id: [''],
      employee_name: ['', Validators.required],
      employee_salary: ['', Validators.required],
      dob: [],
      bio: [],
      employee_designation: []
    });
  }

  onUpdate() {
    this.submitted = true
    if (this.employee?.employee_name && this.editEmployee?.value?.employee_name) {
      const savedEmployees = this.commonService.getEmployeeData()
      const index = savedEmployees?.findIndex(item => item.id === this.employee.id)
      savedEmployees.splice(index, 1)
      const formData = this.editEmployee.value
      savedEmployees?.unshift(this.editEmployee.value)
      this.showSuccessMsg = true
      this.editEmployee.reset()
      this.submitted = false
      setTimeout(()=> {
        this.showSuccessMsg = false
        this.onUpdateEvent.emit(true)
      }, 1000)
    }
  }

}
