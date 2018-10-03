import { Component } from '@angular/core';

@Component({
  selector: 'Strct-ngif',
  templateUrl: './structral-directive.component.html',
  styleUrls: ['./structral-directive.component.css']
})
export class StructralDirectiveComponent {

  public show:boolean=true;
  public Course:string='ok';
  public names:string[]=['Subbu','Soodi','Veyyaku','enkka','chalu','apu','ok'];

  constructor() { }

  
}
