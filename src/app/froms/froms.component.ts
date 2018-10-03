import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-froms',
  templateUrl: './froms.component.html',
  styleUrls: ['./froms.component.css']
})
export class FromsComponent{
  onSubmit(value:any){
     console.log(value)
  } 
}
