import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Heroes, Heroe } from '../interfaces/heroes.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes> {

    const url = `${this.baseUrl}/heroe/getheroes`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.get<Heroes>(url, { headers });

  }

  getHeroeById(id: string): Observable<Heroe> {

    const url = `${this.baseUrl}/heroe/getheroeById/${id}`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.get<Heroe>(url, { headers })
      .pipe(
        map(resp => {
          return resp;
        })
      )

  }

  getSugerencia(termino: string): Observable<Heroes> {

    const url = `${this.baseUrl}/heroe/getheroeBySearch/${termino}`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.get<Heroes>(url, { headers });
  }

  creartHeroe(heroe: Heroe): Observable<Heroe> {

    const url = `${this.baseUrl}/heroe/newheroe`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.post<Heroe>(url, heroe, { headers });

  }

  editarHeroe(heroe: Heroe): Observable<Heroe> {

    const url = `${this.baseUrl}/heroe/editheroe`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.put<Heroe>(url, heroe, { headers });

  }

  eliminarHeroe(id: string): Observable<any> {

    const url = `${this.baseUrl}/heroe/deleteheroe/${id}`;

    const headers = new HttpHeaders()
      .set('x-token', sessionStorage.getItem('token') || '');

    return this.http.delete<any>(url, { headers })
      .pipe(
        map(resp => {
          return resp;
        })
      )

  }

}
