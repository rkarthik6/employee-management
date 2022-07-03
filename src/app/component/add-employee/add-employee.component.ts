import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee: FormGroup;
  submitted = false
  showSuccessMsg = false
  constructor(private fb: FormBuilder, private readonly commonService: CommonService) { }

  ngOnInit(): void {
    this.addEmployeeForm()
  }

  addEmployeeForm() {
    this.addEmployee = this.fb.group({
      id: [''],
      employee_name: ['', Validators.required],
      employee_salary: ['', Validators.required],
      dob: [],
      bio: [],
      employee_designation: []
    });
  }

  get employeeFormControl() {
    return this.addEmployee.controls;
  }


  onSubmit() {
    this.submitted = true
    if (this.addEmployee?.value?.employee_name) {
      const formValue = this.addEmployee.value
      const savedEmployees = this.commonService.getEmployeeData()
      formValue.id = savedEmployees?.length ? savedEmployees.length + 1 : 1
      savedEmployees?.push(formValue)
      this.submitted = false
      this.addEmployee.reset()
      this.showSuccessMsg = true
      setTimeout(()=> {
        this.showSuccessMsg = false
      }, 1000)
    }
  }

  reset() {
    this.addEmployee.reset()
  }

}
