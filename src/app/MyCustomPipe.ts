import { Component} from '@angular/core';
//import {Pipe,PipeTransform} from '@angular/core';

@Component({
    selector:'pre-pipe',
    template:`
           <!-- <h2>{{name | understrline }}</h2>
            <h2 >{{name | Bold }}</h2> -->
            <h1 onmouse>{{ name}}</h1><br>
            <h2 onmouse>{{name | reverstring }}</h2> 
               `,
})

export class MyCustomPipe{
    // public mydate:Date=new Date(); 
    public name:string='Subrahmanyam Hai';
     
}