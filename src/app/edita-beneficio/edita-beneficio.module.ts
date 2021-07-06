import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaBeneficioPageRoutingModule } from './edita-beneficio-routing.module';

import { EditaBeneficioPage } from './edita-beneficio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaBeneficioPageRoutingModule
  ],
  declarations: [EditaBeneficioPage]
})
export class EditaBeneficioPageModule {}
