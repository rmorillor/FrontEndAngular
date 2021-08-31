import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Publicadores, Publicador } from '../interfaces/publicador.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PublicadoresService {

    private baseUrl: string = environment.baseURL;

    constructor(private http: HttpClient) { }

    getPublishers(): Observable<Publicadores> {

        const url = `${this.baseUrl}/publisher/getpublisher`;

        const headers = new HttpHeaders()
            .set('x-token', sessionStorage.getItem('token') || '');

        return this.http.get<Publicadores>(url, { headers });

    }

    getPublisherByCode(code: string): Observable<Publicador> {

        const url = `${this.baseUrl}/publisher/getpublisherBycode/${code}`;

        const headers = new HttpHeaders()
            .set('x-token', sessionStorage.getItem('token') || '');

        return this.http.get<Publicador>(url, { headers })
            .pipe(
                map(resp => {
                    return resp;
                })
            )

    }

    createPublisher(publicador: Publicador): Observable<Publicador> {

        const url = `${this.baseUrl}/publisher/newpublisher`;

        const headers = new HttpHeaders()
            .set('x-token', sessionStorage.getItem('token') || '');

        return this.http.post<Publicador>(url, publicador, { headers });

    }

    editPublisher(publicador: Publicador): Observable<Publicador> {

        const url = `${this.baseUrl}/publisher/editpublisher`;

        const headers = new HttpHeaders()
            .set('x-token', sessionStorage.getItem('token') || '');

        return this.http.put<Publicador>(url, publicador, { headers });

    }

    deletePublisher(id: string): Observable<any> {

        const url = `${this.baseUrl}/publisher/deletepublisher/${id}`;

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