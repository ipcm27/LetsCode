import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly URL = 'http://0.0.0.0:5000/cards/';
  httpClient: any;

  constructor(private http: HttpClient) {}
  cards!: Card[];
  authorization: string = localStorage.getItem('auth') || '';
  // private headers = {
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2MzgzMTQ1NDAsImV4cCI6MTYzODMxODE0MH0.ZoBV620nfgUhqvTMB5Z7WPZmECt7LYExyLi6JIwvsOk',
  // };
  private headers = {
    'Content-Type': 'application/json',
    Authorization: this.authorization,
  };

  cardsChanged = new Subject();
  isLogged = new Subject();

  getAuthorizationToken(login: string, senha: string) {
    const url = `http://0.0.0.0:5000/login/`;
    const body = { login: login, senha: senha };
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    const response = this.http.post<string>(url, body, options);
    return response;
  }

  setAuth(auth: string) {
    this.authorization = 'Bearer ' + auth;
    localStorage.setItem('auth', this.authorization);
    this.isLogged.next(true);
  }

  clearAuth() {
    this.authorization = '';
    localStorage.removeItem('auth');
    this.isLogged.next(true);
  }

  getCards() {
    return this.http
      .get(this.URL, {
        headers: this.headers,
      })
      .pipe(tap(console.log));
  }

  getCard(id: any) {
    return this.http.get(`${this.URL}${id}`, {
      headers: this.headers,
    });
  }

  createCard(titulo: string, conteudo: string, lista: string) {
    return this.http.post(
      this.URL,
      { titulo, conteudo, lista },
      {
        headers: this.headers,
      }
    );
  }

  updateCard(id: string, titulo: string, conteudo: string, lista: string) {
    return this.http.put(
      `${this.URL}${id}`,
      { id, titulo, conteudo, lista },
      {
        headers: this.headers,
      }
    );
  }

  deleteCard(id: any) {
    return this.http.delete(`${this.URL}${id}`, {
      headers: this.headers,
    });
  }
}
