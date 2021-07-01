import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarcadastroPage } from './editarcadastro.page';

const routes: Routes = [
  {
    path: '',
    component: EditarcadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcadastroPageRoutingModule {}
