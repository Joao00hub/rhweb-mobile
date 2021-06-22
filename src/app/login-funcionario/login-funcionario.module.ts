import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginFuncionarioPageRoutingModule } from './login-funcionario-routing.module';

import { LoginFuncionarioPage } from './login-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFuncionarioPageRoutingModule
  ],
  declarations: [LoginFuncionarioPage]
})
export class LoginFuncionarioPageModule {}
