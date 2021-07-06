import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaBeneficioPage } from './edita-beneficio.page';

const routes: Routes = [
  {
    path: '',
    component: EditaBeneficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaBeneficioPageRoutingModule {}
