import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {
  visibleSearchbar: boolean = false;
  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  navEditCadastro(){
    this.navCtrl.navigateForward('editarcadastro');
  }
  exibiSearchbar()
  {
      this.visibleSearchbar = !this.visibleSearchbar;
  }
}
