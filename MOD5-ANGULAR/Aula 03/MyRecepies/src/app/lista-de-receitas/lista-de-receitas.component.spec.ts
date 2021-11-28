import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeReceitasComponent } from './lista-de-receitas.component';

describe('ListaDeReceitasComponent', () => {
  let component: ListaDeReceitasComponent;
  let fixture: ComponentFixture<ListaDeReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeReceitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
