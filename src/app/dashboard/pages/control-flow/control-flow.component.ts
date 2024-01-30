import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'C'; // Hacemos este tipado para controlar el valor


@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // Creamos una señal
  public showContent = signal(false);

  public grade = signal<Grade>('C');


  public toggleContent(){
    this.showContent.update( value => !value) // Hacemos la negacion del valor
  }

}
