import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovocadastroPage } from './novocadastro.page';

const routes: Routes = [
  {
    path: '',
    component: NovocadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovocadastroPageRoutingModule {}
