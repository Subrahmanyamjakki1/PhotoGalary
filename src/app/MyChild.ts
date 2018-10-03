import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
selector:'child-compo',
template:`<button (click)="Decrement()">Decrement</button>
           <input type="text" [value]="count" disabled>
           <button (click)="Increment()">Increment</button><br>
           <input type="text" [value]="result" disabled><br>
           <button (click)="Add()"><h1>+</h1></button>
           <button (click)="Mod()"><h1>%</h1></button>
           <button (click)="Sub()"><h1>-</h1></button>
           <button (click)="Mul()"><h1>*</h1></button>
           <button (click)="Div()"><h1>/</h1></button>
          
          `
        })
export class MyChildFunction{
    result:number;
    @Input()
    count:number=0;
    @Input()
    v1:number;
    @Input()
    v2:number;

    
    @Output()
        value1:EventEmitter<number>=new EventEmitter<number>();
     //   value2:EventEmitter<number>=new EventEmitter<number>();
        

    Increment(){
        this.count++;
        this.value1.emit(this.count);
        //alert(this.count)
    }
    Decrement(){
        this.count--;
        this.value1.emit(this.count);
    }
    Add(){
        //alert(this.v1);
        //this.value1.emit(this.v1+this.v2)
        this.result=this.v1+this.v2;
    }
    Div(){
        //alert(this.v1);
       // this.value1.emit(this.v1/this.v2)
       this.result=this.v1/this.v2;
    }
    Mod(){
        //alert(this.v1);
        //this.value1.emit((this.v1)%(this.v2))
        this.result=(this.v1)%(this.v2);
    }
    Sub(){
        //alert(this.v2)
        //this.value1.emit(this.v1-this.v2)
        this.result=this.v1-this.v2;
    }
    Mul(){
        //alert(this.v2)
       // this.value1.emit(this.v1*this.v2)
       this.result=this.v1*this.v2;
    }
}