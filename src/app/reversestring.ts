import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
   name:'stringrevese' 
})

export  class myStringReverse implements PipeTransform{
      transform(message:string):any{
          var l=message.length-1;
          while(l>=0){
              document.write(message[l]);
              l--;
          }
          return message;
      }
}