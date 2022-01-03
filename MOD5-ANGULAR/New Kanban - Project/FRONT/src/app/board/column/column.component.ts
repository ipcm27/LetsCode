import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { Column } from 'src/app/models/column.model';
import { CardService } from 'src/app/services/card.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: string;
  @Input() cards!: Card[];

  showForm: boolean = false;
  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
  });

  constructor(private service: CardService) {}

  ngOnInit(): void {}

  onCardChanged(c: Card) {
    this.cards.forEach((card) => {
      if (card.id === c.id) {
        card.conteudo = c.conteudo;
        card.titulo = c.titulo;
        card.lista = c.lista;
      }
    });
  }

  onCreateCard() {
    this.showForm = !this.showForm;
  }

  createCard() {
    this.service
      .createCard(
        this.cardForm.value.titulo,
        this.cardForm.value.conteudo,
        this.column
      )
      .subscribe(() => {
        this.service.getCards().subscribe((data) => {
          this.cards = data;
        });
      });
    this.showForm = !this.showForm;
  }

  // drop(event: CdkDragDrop<string>) {
  //   moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  // }
}
