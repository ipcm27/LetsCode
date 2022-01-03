import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Card } from 'src/app/models/card.model';
import { COLUMNS } from 'src/app/models/columns';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() id!: string;
  @Input() card!: Card;
  openEditForm: boolean = false;
  @Output() mudouValor = new EventEmitter();

  columns = COLUMNS;

  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
  });

  constructor(private route: ActivatedRoute, private service: CardService) {}

  ngOnInit(): void {}

  onDeleteCard() {
    this.service.deleteCard(this.id).subscribe((p) => {
      this.service.cardsChanged.next(p);
    });
  }

  onEditCard() {
    this.openEditForm = !this.openEditForm;
    this.mudouValor.emit(this.openEditForm.toString());
  }

  goNext() {
    const index = this.columns.indexOf(this.card.lista);
    console.log(index);
    if (index < 2) {
      this.card.lista = this.columns[index + 1];
      this.service
        .updateCard(
          this.card.id,
          this.card.titulo,
          this.card.conteudo,
          this.card.lista
        )
        .subscribe((card) => {
          this.service.cardsChanged.next(card);
        });
    }
  }

  goBefore() {
    const index = this.columns.indexOf(this.card.lista);
    console.log(index);
    if (index > 0) {
      this.card.lista = this.columns[index - 1];
      this.service
        .updateCard(
          this.card.id,
          this.card.titulo,
          this.card.conteudo,
          this.card.lista
        )
        .subscribe((card) => {
          this.service.cardsChanged.next(card);
        });
    }
  }

  updateCard() {
    this.service
      .updateCard(
        this.id,
        this.cardForm.value.titulo,
        this.cardForm.value.conteudo,
        this.card.lista
      )
      .subscribe((p) => {
        this.service.cardsChanged.next(p);
      });
  }
}
