import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { ListaDeComprasEditComponent } from './lista-de-compras-edit/lista-de-compras-edit.component';
import { ListaDeReceitasComponent } from './lista-de-receitas/lista-de-receitas.component';
import { ItemDeReceitasComponent } from './item-de-receitas/item-de-receitas.component';
import { DetalheDeReceitaComponent } from './detalhe-de-receita/detalhe-de-receita.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeComprasComponent,
    ListaDeComprasEditComponent,
    ListaDeReceitasComponent,
    ItemDeReceitasComponent,
    DetalheDeReceitaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
