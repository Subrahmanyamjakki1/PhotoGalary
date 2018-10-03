import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[text-color]'
 
})
export class MyCustomComponentComponent {
  constructor(t1:ElementRef,render:Renderer){
    render.setElementStyle(t1.nativeElement,'color','red');

  }

}
