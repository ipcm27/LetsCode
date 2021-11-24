import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../model/board.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly API = 'http://0.0.0.0:5000/cards/';
  private headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2Mzc3NTMwNTcsImV4cCI6MTYzNzc1NjY1N30.jiJCUlbfl54oF98_L39-dne-ha09DgyaXgE_vbbBdyc',
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
