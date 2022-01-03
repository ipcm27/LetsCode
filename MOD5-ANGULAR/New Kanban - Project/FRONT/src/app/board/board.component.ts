import { Component, OnInit } from '@angular/core';

import { Card } from '../models/card.model';
import { Column } from '../models/column.model';
import { COLUMNS } from '../models/columns';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cards!: Card[];
  columns = COLUMNS;

  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.getCards();

    this.service.cardsChanged.subscribe((card) => {
      this.getCards();
    });
  }

  async getColumns() {
    this.cards.map((obj) => {
      let { titulo, conteudo, lista, id } = obj;

      this.columns.push(lista);
    });
  }

  getCards() {
    this.service.getCards().subscribe((cards) => {
      if (!cards) {
        return alert('Não possui cards cadastrados');
      } else {
        this.cards = cards;
        return cards;
      }
    });
  }
}
