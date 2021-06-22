import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAdmPageRoutingModule } from './inicio-adm-routing.module';

import { InicioAdmPage } from './inicio-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAdmPageRoutingModule
  ],
  declarations: [InicioAdmPage]
})
export class InicioAdmPageModule {}
