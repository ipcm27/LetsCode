import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { COLUMNS } from 'src/app/models/columns';
import { CardService } from 'src/app/services/card.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  columns = COLUMNS;
  @Input() column!: string;
  @Input() card!: Card;
  @Output() cardChanged = new EventEmitter<Card[]>();

  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
  });

  editForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
  });

  editBool!: boolean;

  id: string = '';
  title: string = '';
  content: string = '';
  lista: string = '';

  menuOpen: boolean = false;

  constructor(
    private service: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCardInfo();
  }

  getCardInfo() {
    this.id = this.card.id;
    this.title = this.card.titulo;
    this.content = this.card.conteudo;
    this.lista = this.card.lista;
  }

  onNavigate() {
    this.router.navigate([this.card.id], { relativeTo: this.route });
  }

  onOpenMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeCard() {
    this.editBool = !this.editBool;
  }

  onMudouValor(evento: any) {
    if (evento == 'true') {
      this.editBool = !this.editBool;
    }
  }

  updateCard() {
    this.service
      .updateCard(
        this.id,
        this.editForm.value.titulo,
        this.editForm.value.conteudo,
        this.card.lista
      )
      .subscribe((p) => {
        this.service.cardsChanged.next(p);
      });
  }

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
