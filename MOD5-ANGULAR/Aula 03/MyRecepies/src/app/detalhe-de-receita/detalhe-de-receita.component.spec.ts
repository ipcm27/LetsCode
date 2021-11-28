import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDeReceitaComponent } from './detalhe-de-receita.component';

describe('DetalheDeReceitaComponent', () => {
  let component: DetalheDeReceitaComponent;
  let fixture: ComponentFixture<DetalheDeReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheDeReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDeReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
