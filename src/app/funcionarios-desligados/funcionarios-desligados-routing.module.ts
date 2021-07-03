import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosDesligadosPage } from './funcionarios-desligados.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosDesligadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosDesligadosPageRoutingModule {}
