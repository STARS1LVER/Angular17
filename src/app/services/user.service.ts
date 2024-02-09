import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse } from '../interfaces/request-response';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import { UserResponseId } from '../interfaces/user-reponse-interface';
import { Data } from '@angular/router';

interface State{
  users: User[];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // El numeral hace mi estado privado
  // solo es visible internamente en mi sevicio
  #state = signal<State>({
    loading: true,
    users:[],
  })

  // this a signal conmputed of only read
  // esto es una señal computada de solo lectura
  public users = computed( () => this.#state().users )
  public loading = computed(() => this.#state().loading )

  private httpClient = inject(HttpClient );

  constructor() {
    this.httpClient.get<UserResponse>("https://reqres.in/api/users")
    .pipe( delay(1500) ) // hacemos intencionalmente que demore un poco
     .subscribe(respuesta => {
      // le establecemos el valor a la señal
      this.#state.set({
        loading: false,
        users:  respuesta.data
      })
    })
  }

  public getUserByid( id: string) {
   return  this.httpClient.get<UserResponseId>(`https://reqres.in/api/users/${ id }`)
    .pipe(delay(1500),
     map(response => response.data))
  }

}
