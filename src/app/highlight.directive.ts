import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private ele:ElementRef) {
    console.log("element we get is ",this.ele.nativeElement)
    this.ele.nativeElement.style.color = "red"
   }

}
