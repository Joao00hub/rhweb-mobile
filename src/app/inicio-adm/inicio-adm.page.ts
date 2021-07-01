import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-adm',
  templateUrl: './inicio-adm.page.html',
  styleUrls: ['./inicio-adm.page.scss'],
})
export class InicioAdmPage implements OnInit {

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
