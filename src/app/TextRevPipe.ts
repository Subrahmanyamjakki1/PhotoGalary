import {Pipe,PipeTransform} from '@angular/core';

 @Pipe({
     name:'reverstring'
 })
 export class TextRevPipe implements PipeTransform{
     transform(name:string):any{
        let revstr="",l=name.length,i
        for(i=l-1;i>=0;i--){
            revstr+=name.charAt(i);
            
        } return revstr;
     }
    // transform(message:string):any{
    //     var l=message.length-1;
    //     while(l>=0){
    //         document.write(message[l]);
    //         l--;
    //     }
    //     return message;
    // }
 }