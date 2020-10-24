import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log('directiva llamada');
    el.nativeElement.style = 'background-color:yellow'
  }

  @Input("appResaltado") nuevoColor:string;
  
  @HostListener('mouseenter') mouseentro() {
    this.resaltar(this.nuevoColor || 'red');
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mousesalio() {
    this.el.nativeElement.style.backgroundColor = "green";
  }

  private resaltar(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
