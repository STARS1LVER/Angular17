import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" ></app-title>
        <section class="flex justify-end">

          <img
            srcset="https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Fizz_0.jpg"
            alt="Fizz"
            width="200"
            height="300"
            style="view-transition-name: hero1"
          >

          <div class="bg-blue-500 w-56 h-56"
          style="view-transition-name: hero2"
          ></div>

        </section>


  `
})
export default class ViewTransitionsComponent {

}
