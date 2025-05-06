import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {

    this.element.nativeElement.style.color = 'black';

  }

  @Input('appClass')
  set backgroundColor(newBackgroundColor: string) {
    this.element.nativeElement.style.backgroundColor = newBackgroundColor;
  }

}
