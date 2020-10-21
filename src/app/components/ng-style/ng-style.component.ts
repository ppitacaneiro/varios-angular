import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo...
    </p>

    <button type="button" class="btn btn-primary" (click)="tamano = tamano + 5">+</button>
    <button type="button" class="btn btn-primary" (click)="tamano = tamano - 5">-</button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  tamano:number = 10;

  ngOnInit(): void {
  }

}
