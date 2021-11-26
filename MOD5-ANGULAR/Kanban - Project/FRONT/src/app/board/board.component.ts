import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../model/board.model';
import { Column } from '../model/column.model';
import { Card } from '../model/card.model';
import { CardService } from '../services/card.service';
import { Conteiner } from '../model/conteiner.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cards: Card[] = [];
  toDo: Card[] = [];
  doing: Card[] = [];
  done: Card[] = [];
  arrays: Conteiner[] = [];
  columnNames: string[] = [];

  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.service.list().subscribe((dados) => (this.cards = dados));

    setTimeout(() => {
      this.cards.map((obj) => {
        let { titulo, conteudo, lista, id } = obj;

        if (lista.toString() == 'to do' || lista.toString() == 'To do') {
          this.toDo.push(obj);
        } else if (lista.toString() == 'doing' || lista.toString() == 'Doing') {
          this.doing.push(obj);
        } else if (lista.toString() == 'done' || lista.toString() == 'Done') {
          this.done.push(obj);
        } else {
        }
        this.columnNames.push(lista);
      });
      this.arrays.push({ name: 'to do', cards: this.toDo });
      this.arrays.push({ name: 'doing', cards: this.doing });
      this.arrays.push({ name: 'done', cards: this.done });

      console.log(this.arrays);
    }, 2500);
  }

  board: Board = new Board('test Board');

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

//

// board: Board = new Board('test Board', [
// new Column('To do', [new Card('Movies', 'go to the movies',"to do")]),
// new Column('doing', [new Card('Studiyng', 'Read Books and watch videos',"doing")]),
// new Column('done ', [new Card('Sleep', '8 hours of good sleep',"done")]),
// ]);
