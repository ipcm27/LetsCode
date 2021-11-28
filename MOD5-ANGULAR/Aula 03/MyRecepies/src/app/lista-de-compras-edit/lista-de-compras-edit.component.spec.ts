import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeComprasEditComponent } from './lista-de-compras-edit.component';

describe('ListaDeComprasEditComponent', () => {
  let component: ListaDeComprasEditComponent;
  let fixture: ComponentFixture<ListaDeComprasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeComprasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeComprasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
