import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  contentOFCardWithColumnDoubled!: string;
  private readonly API = 'http://0.0.0.0:5000/cards/';
  private headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2MzgyMjk1NzYsImV4cCI6MTYzODIzMzE3Nn0.lwZVUsoImhMlhC1OCUxJkC9zk3E7w3IrVeK3QMsV1u0',
  };
  tokenResponse!: Object;
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http
      .get(this.API, {
        headers: this.headers,
      })
      .pipe(tap(console.log));
  }

  createCard(titulo: string, conteudo: string, lista: string) {
    return this.http.post(
      this.API,
      { titulo, conteudo, lista },
      {
        headers: this.headers,
      }
    );
  }

  updateCard(id: string, titulo: string, conteudo: string, lista: string) {
    return this.http.put(
      `${this.API}/${id}`,
      { id, titulo, conteudo, lista },
      {
        headers: this.headers,
      }
    );
  }

  deleteCard(id: string) {
    return this.http.delete(`${this.API}/${id}`, {
      headers: this.headers,
    });
  }
}
