import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeReceitasComponent } from './item-de-receitas.component';

describe('ItemDeReceitasComponent', () => {
  let component: ItemDeReceitasComponent;
  let fixture: ComponentFixture<ItemDeReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDeReceitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
