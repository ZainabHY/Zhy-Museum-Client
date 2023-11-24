import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomer]'
})
export class ZoomerDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const original = this.el.nativeElement.querySelector('#img-1');
    const magnified = this.el.nativeElement.querySelector('#img-2');
    const style = magnified.style;
    const x = event.pageX - this.el.nativeElement.offsetLeft;
    const y = event.pageY - this.el.nativeElement.offsetTop;
    const imgWidth = original.offsetWidth;
    const imgHeight = original.offsetHeight;
    const xperc = (x / imgWidth) * 100;
    const yperc = (y / imgHeight) * 100;

    if (x > 0.01 * imgWidth) {
      style.backgroundPositionX = (xperc - 9) + '%';
    }

    if (y >= 0.01 * imgHeight) {
      style.backgroundPositionY = (yperc - 9) + '%';
    }

    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';
  }
}
