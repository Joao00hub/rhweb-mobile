import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-editarcadastro',
  templateUrl: './editarcadastro.page.html',
  styleUrls: ['./editarcadastro.page.scss'],
})
export class EditarcadastroPage implements OnInit {

  constructor(public popoverCtlr: PopoverController) { }

  ngOnInit() {
  }
}