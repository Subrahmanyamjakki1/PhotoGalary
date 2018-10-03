import {Directive,ElementRef,Renderer} from '@angular/core';
@Directive({
    selector:'[bg-color]'
})
export class MyCostumBgColor{
    constructor(bg:ElementRef,rend:Renderer){
    // rend.setElementStyle(bg.nativeElement,'background-color','green');
      rend.setElementStyle(bg.nativeElement,'font-style','italic');
     // rend.setElementStyle(bg.nativeElement,'font-weight','1200');
      rend.setElementStyle(bg.nativeElement,'text-align','right');
    }
    
}