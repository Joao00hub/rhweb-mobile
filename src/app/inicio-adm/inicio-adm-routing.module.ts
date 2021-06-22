import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAdmPage } from './inicio-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAdmPageRoutingModule {}
