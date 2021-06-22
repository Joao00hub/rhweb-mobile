import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAdmPageRoutingModule } from './login-adm-routing.module';

import { LoginAdmPage } from './login-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAdmPageRoutingModule
  ],
  declarations: [LoginAdmPage]
})
export class LoginAdmPageModule {}
