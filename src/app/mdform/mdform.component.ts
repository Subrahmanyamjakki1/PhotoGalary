import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MDFormComponent  {

  userForm= new FormGroup({
   name:new FormControl('Subrahmanyam',[Validators.required,Validators.minLength(5)]),
   Contact:new FormControl(9505379997,[Validators.required,Validators.minLength(10),
    Validators.maxLength(10)]),

 })
 onSubmit(){
   console.log(this.userForm.value)
   //console.log(this.userForm)
 }
}
