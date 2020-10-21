import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements OnInit {

  constructor() { }

  alerta:string = "alert-danger";

  ngOnInit(): void {
  }

}
