import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'Bold'
})
export class TextBoldPipe implements PipeTransform{
    transform(str:any):any{
        let v=str;
        return "<i><b>"+ v+"</b></i>";
    }
}