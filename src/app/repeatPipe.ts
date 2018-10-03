import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'repeat'
})
export class RepeatPipe implements PipeTransform{
    transform(t:any,times:number):any{
        return t.repeat(times);

    }
}