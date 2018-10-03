import { Component } from '@angular/core';
import {myStringReverse } from './reversestring';
import { RepeatPipe } from './repeatPipe';

@Component({
    selector:'Built-in-pipes',
    template:` <h3>{{name}}</h3>
    <h3>{{ name|uppercase|stringrevese }}</h3>
    <h3>{{ name|lowercase }}</h3>
    <h3>{{ name|repeat:5|uppercase }}</h3>
    <h1>Now Current Date is:{{mydate}}</h1>
    <h1>Now Current Date is:{{mydate|date:'fullDate'}}</h1>
    <h1>Now Current Date is:{{mydate|date:'dd-yy-mm '}}</h1>
    <h1>Now Current Date & Time is:{{mydate|date:'short'}}</h1>
    <h1>Number converted into</h1>
    <h1>Decimal Number(Default Decimal values) :{{Num|number}}</h1>
    <h1>Decimal Number(Parameter Decimal values) :{{ Num|number :'3.2-5' }}</h1>
    <h1>Percentage Number(Default Percent  values) :{{ num|percent }}</h1>
    <h1>Number that will be changed into currency(Using default format:) :
    {{ money|currency }}</h1>
    <h1>Number that will be changed into currency(Using INR format:) :
    {{ money|currency:'INR':ture:'2.2-4' }}</h1>

    `

})

export class BuiltInPipes{
    name:string="Subrahmanyam"
     mydate:Date= new Date();
     Num:number=1.23786573;
     num:number=8.9;
     money=100
}