import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio-funcionario',
  templateUrl: './inicio-funcionario.page.html',
  styleUrls: ['./inicio-funcionario.page.scss'],
})
export class InicioFuncionarioPage implements OnInit {

  constructor(private navCtrl : NavController) { }
  navQuemSomos(){
    this.navCtrl.navigateForward('quem-somos');
  }
  navAvisos(){
    this.navCtrl.navigateForward('avisos');
  }
  navNoticias(){
    this.navCtrl.navigateForward('noticias');
  }
  
  ngOnInit() {
  }

}
