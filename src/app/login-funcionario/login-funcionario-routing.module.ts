import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFuncionarioPage } from './login-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginFuncionarioPageRoutingModule {}
