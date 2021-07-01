import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovocadastroPageRoutingModule } from './novocadastro-routing.module';

import { NovocadastroPage } from './novocadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovocadastroPageRoutingModule
  ],
  declarations: [NovocadastroPage]
})
export class NovocadastroPageModule {}
