import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.page.html',
  styleUrls: ['./login-funcionario.page.scss'],
})
export class LoginFuncionarioPage implements OnInit {

  constructor(private navCtrl : NavController) { }
  navVoltar(){
    this.navCtrl.navigateForward('home');
  }

  navLogar(){
    this.navCtrl.navigateForward('inicio-funcionario');
  }

  ngOnInit() {
  }

}
