import { Injectable } from "@angular/core";

@Injectable()

export class EmployeeDetailsSrevices{

    employeeDetails(){
        return [
            {"empid":501,"empname":"Subrahmanyam","salary":50000},
            {"empid":502,"empname":"Soumya","salary":60000},
            {"empid":503,"empname":"Ravi","salary":55000},
            {"empid":504,"empname":"Raju","salary":50000},
            {"empid":505,"empname":"Madhavi","salary":70000}
        ]
    }

}