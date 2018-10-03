import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsSrevices } from '../SharedDataServices/EmployeeSrevices';
import { JsonSrevice } from '../SharedDataServices/JsonSrevice';

@Component({
  selector: 'app-inject-services',
  templateUrl: './inject-services.component.html',
  styleUrls: ['./inject-services.component.css'],
  providers: [JsonSrevice,EmployeeDetailsSrevices]
})
export class InjectServicesComponent implements OnInit {
  //[x: string]: any;
    EmpDetails:any=[];
     JsonObj:any=[];
    //console.log(this.JsonObj1[0]);
    
  constructor(private _JsonSrevice:JsonSrevice,private _employeeDetailsSrevices:EmployeeDetailsSrevices) { }

  ngOnInit() {
    this.EmpDetails=this._employeeDetailsSrevices.employeeDetails();
    this.JsonObj=this._JsonSrevice.getUserDetails().subscribe(success_result=>this.JsonObj=success_result)
//alert(this.JsonObj[0]);
  }
  

}
