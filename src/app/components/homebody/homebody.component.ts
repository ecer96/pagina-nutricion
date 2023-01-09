import { Component } from '@angular/core';

@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.scss']
})
export class HomebodyComponent {
  public miNombre:string;
  public saludo:string;
  public misServicios:string;

  constructor(){
    this.miNombre='soy lizbeth zuñiga , licenciada en ciencias nutricionales';
    this.saludo='Hola!'
    this.misServicios='Mi mision es poder ayudarte a cumplir con tus objetivos , enseñarte a mejorar tu alimentacion de acuerdo a tus metas y poder lograr una transformacion efectiva y duradera.';
  }

}
