import {Component} from '@angular/core';
@Component({
   selector: 'key-up',
   template: `
           <div>
             <input (keyup)="onKey($event)" value={{values}}/>
             <div>{{values}}</div>
           </div> 
    `
})
export class KeyUpComponent {
    values;
  onKey(event){
       this.values += event.target.value + ' | '
  }
}