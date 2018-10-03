import {Component, Input} from '@angular/core';

@Component({
    selector:'MyParent',
    template:`<h1>{{mynumber}}</h1>
               <child-compo [count]='mynumber' [v1]='v1' [v2]='v2' (value1)="countChange($event)" >
               </child-compo><br><br>  
               <!-- <h4>Enter First Number</h4><input type="text" #v1>
            //    <h4>Enter Second Number</h4><input type="text" #v2><br/>
            //    <button type="submit" (click)="SetValues(v1.value)">Submit Values</button>
            //    <!--<child-compo [count]='mynumber'  (value2)="countChange($event)" disabled></child-compo><br><br>-->
            //   <!-- <child-compo [count]='mynumber'  (value3)="countChange($event)" disabled></child-compo><br><br>-->   
              `
})
export class IncrementAndDecrement{
mynumber:number=20;x
//@Input()
v1:number=22;v2:number=2;
//  x:number=(function SetValues( v1:number){
// return v1;
// })
//  x=(v1:number):number=>{
//     return v1;
//     })
countChange(e){
this.mynumber=e;
}    
}