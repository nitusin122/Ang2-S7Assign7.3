import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';  
  
@Directive({  
  selector: '[color-Changer]'  
})  
export class colorChangeDirective {  
  
 constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const text = event.target.innerText;
    if(event.target.classList.contains('odd')) {
      this.highlight('red');
    }
   if(event.target.classList.contains('even')) {
      this.highlight('green');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}  
  
  
  
