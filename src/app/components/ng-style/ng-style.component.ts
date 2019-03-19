import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size: 10px;">
      Hola mundo... esta es una etiqueta
    </p>
    <p [ngStyle]="{ 'font-size': '10px;'}">
      Hola mundo... esta es una etiqueta2
    </p>
    <p [ngStyle]="{ 'font-size': tamano + 'px'}">
      Hola mundo... esta es una etiqueta2
    </p>
    <p [ngStyle]="{ 'font-size': tamano + 'px', 'color': 'red'}">
      Hola mundo... esta es una etiqueta2
    </p>
    <p [style.fontSize]="'30px'">
      Hola mundo... esta es una etiqueta3
    </p>
    <p [style.fontSize.px]="'tamano'">
      Hola mundo... esta es una etiqueta4
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;
  constructor() { }

  ngOnInit() {
  }

}
