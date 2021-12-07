import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.open') isOpen = false
  @HostListener('click') onFocus() {
    this.isOpen = !this.isOpen
  }
  @HostListener('focusout') onMouseLeave() {
    this.isOpen = false
  }
}
