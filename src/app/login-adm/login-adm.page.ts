import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.page.html',
  styleUrls: ['./login-adm.page.scss'],
})
export class LoginAdmPage implements OnInit {

  constructor(private navCtrl : NavController) { }
  navVoltar(){
    this.navCtrl.navigateForward('home');
  }

  navLogar(){
    this.navCtrl.navigateForward('inicio-adm');
  }

  ngOnInit() {
  }

}
