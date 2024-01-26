import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  // Esta propiedad contiene todo acerca de las rutas y nos permite ser un poco mas dinamico con el menu
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat() // aplanamos el arreglo, osea si el arreglo es bidimensional ahora sera unidimencional
    .filter( route => route && route.path) // filtramos para que solo este las rutas que tienen path
    .filter( route => !route.path?.includes(':')) // escluimos las rutas que tienen 2 puntos

  constructor(){

  }

}
