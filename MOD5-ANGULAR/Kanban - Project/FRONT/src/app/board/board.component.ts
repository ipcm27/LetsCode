import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../model/board.model';
import { Column } from '../model/column.model';
import { Card } from '../model/card.model';
import { AppModule } from '../app.module';
import { CardService } from '../services/card.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  cards!: Card[];
  nomeslista!: String[];
  columnsArray: Column[] = [];
  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.service.list().subscribe((dados) => (this.cards = dados));

    setTimeout(() => {
      this.cards.map((obj) => {
        let { titulo, conteudo, lista } = obj;

        let myColumns = new Column(obj.lista, [
          new Card(titulo, conteudo, lista),
        ]);
        this.columnsArray.push(myColumns);
      });
      console.log(this.columnsArray);
    }, 2000);

    setTimeout(() => {
      this.columnsArray.map((obj) => {
        let { name, cards } = obj;

        if ((name = 'to do')) {
        }
      });
    }, 3000);
  }

  //

  board: Board = new Board('test Board', [
    // new Column('To do', [new Card('Movies', 'go to the movies',"to do")]),
    // new Column('doing', [new Card('Studiyng', 'Read Books and watch videos',"doing")]),
    // new Column('done ', [new Card('Sleep', '8 hours of good sleep',"done")]),
  ]);

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
