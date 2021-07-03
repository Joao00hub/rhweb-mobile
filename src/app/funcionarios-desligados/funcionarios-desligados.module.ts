import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionariosDesligadosPageRoutingModule } from './funcionarios-desligados-routing.module';

import { FuncionariosDesligadosPage } from './funcionarios-desligados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionariosDesligadosPageRoutingModule
  ],
  declarations: [FuncionariosDesligadosPage]
})
export class FuncionariosDesligadosPageModule {}
