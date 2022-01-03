import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { BoardComponent } from '../board.component';

@Component({
  selector: 'app-modal-create-update',
  templateUrl: './modal-create-update.component.html',
  styleUrls: ['./modal-create-update.component.css'],
})
export class ModalCreateUpdateComponent implements OnInit {
  showForm: boolean = false;
  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
    lista: new FormControl(),
  });
  data!: string;
  constructor(private service: CardService) {}

  ngOnInit(): void {}

  onCreateCard() {
    if (this.showForm == false) {
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  }

  createCard() {
    console.log(this.cardForm);
    this.service.createCard(
      this.cardForm.value.titulo,
      this.cardForm.value.conteudo,
      this.cardForm.value.name
    );
  }
}
