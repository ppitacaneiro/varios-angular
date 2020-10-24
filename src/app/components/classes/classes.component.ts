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
  loading:boolean = false;

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;
    console.log(this.loading);
    setTimeout(function(){
      this.loading = false; 
    },1000);
    console.log(this.loading);
  }

}
