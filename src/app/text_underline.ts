import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'understrline'
})
export class TextUnderLine implements PipeTransform{
    transform(str:any){
        let v=str+" Your Text Is Underlined";
        return '<u>'+v+'</u>';
    }
}