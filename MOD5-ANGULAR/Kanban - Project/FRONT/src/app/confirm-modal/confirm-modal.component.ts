import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  msg!: string;
  @Input()
  cancelar = 'Cancelar';
  @Input()
  save = 'Salvar';

  constructor() {}

  ngOnInit(): void {}

  Onconfirm() {}
  OnClose() {}
}
