import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ 
     selector: '[onmouse]' 
})
export class MouseEvents {
   constructor(private elRef: ElementRef) { 
   }
   @HostListener('mouseover') onMouseOver() {
     this.changeColor('red');
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.changeColor('green');
   }
   private changeColor(color: string) {
     this.elRef.nativeElement.style.color = color;
   }  
} 