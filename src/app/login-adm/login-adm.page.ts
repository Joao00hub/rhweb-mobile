import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RhwebService } from './../services/rhweb.service';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.page.html',
  styleUrls: ['./login-adm.page.scss'],
})
export class LoginAdmPage implements OnInit {

  token: any;
  erro: any;
  user: any;
  pass: any;

  constructor(private navCtrl: NavController, private funcionariosService: RhwebService) { }
  navVoltar() {
    this.navCtrl.navigateForward('home');
  }

  navLogar() {
    this.navCtrl.navigateForward('inicio-adm');
  }

  ngOnInit() {
  }

  loginAdm() {
     
    this.user = (<HTMLInputElement>document.getElementById("loginAdm")).value;
    console.log(this.user);
    this.pass = (<HTMLInputElement>document.getElementById("senhaAdm")).value;
    console.log(this.pass);

    this.funcionariosService.loginFunAdm(this.user, this.pass).subscribe(data => {
      this.token = data.token;
      console.log(this.token);
      localStorage.setItem('acessToken', this.token);
      this.navCtrl.navigateForward('inicio-adm');
    },
      (error: any) => {
        this.erro = error;
        console.log('ERROR: ', error);
      })
  }

}
