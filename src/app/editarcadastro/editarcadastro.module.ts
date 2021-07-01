import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcadastroPageRoutingModule } from './editarcadastro-routing.module';

import { EditarcadastroPage } from './editarcadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcadastroPageRoutingModule
  ],
  declarations: [EditarcadastroPage]
})
export class EditarcadastroPageModule {}
