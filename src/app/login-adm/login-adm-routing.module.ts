import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAdmPage } from './login-adm.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAdmPageRoutingModule {}
