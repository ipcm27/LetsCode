import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  contentOFCardWithColumnDoubled!: string;
  private readonly API = 'http://0.0.0.0:5000/cards/';
  private headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Mzc4ODk5MTIsImV4cCI6MTYzNzg5MzUxMn0.lE_H93UcUFegOecb-Wt-yGxpbspcbos-cNDNUEc78Is',
  };
  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get(this.API, {
        headers: this.headers,
      })
      .pipe(tap(console.log));
  }
}
