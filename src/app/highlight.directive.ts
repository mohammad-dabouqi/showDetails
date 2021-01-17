import { Directive ,ElementRef , HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private el: ElementRef ,private renderer:Renderer2) {}
  ngOnInit()
  {
    // this.renderer.setStyle(this.el.nativeElement,'color','aqua')
    this.color = 'pink';
  }

  @HostBinding('style.color') color:string='red';

 @HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('red');
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

}

