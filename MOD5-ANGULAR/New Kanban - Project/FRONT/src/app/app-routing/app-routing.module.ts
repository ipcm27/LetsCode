import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import { MenuComponent } from '../board/column/card/menu/menu.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cards',
    component: BoardComponent,
    children: [{ path: ':id', component: MenuComponent }],
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
