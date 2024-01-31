import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template:`
    <h1 [ngClass]="['w-full h-[600px]', cssClass]"
    >Hola mundo</h1>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) public cssClass!: string;

  constructor(){
    const start = Date.now()
    while(Date.now() - start < 3000){

    }

  }

}
