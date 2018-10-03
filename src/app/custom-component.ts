import {Component} from '@angular/core';
//import {Pipe,PipeTransform} from '@angular/core';
@Component({
    selector:'my-str-test',
    template:`<span>Enter Name:</span>
    <input type="text" #text1>
    <h1>{{text1.value|uppercase}}</h1>
    <button type="submit" (click)="text(text1.value)">Done</button>
    
    <h3 id="t1"></h3>
    `
})
export class MyStrTest{

      text(t1:any){
         var text1:any=t1;
         //alert(t1)
       return document.getElementById('t1').innerHTML=t1;
      }
}