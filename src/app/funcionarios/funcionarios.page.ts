import { funcionarios } from './../models/funcionarios.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RhwebService } from './../services/rhweb.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {
  visibleSearchbar: boolean = false;
  constructor(private navCtrl: NavController, private funcionariosService: RhwebService) { 
    this.getter();
  }

  funcs: any;
  erro: any;
  classSitua: any;

  ngOnInit() {
  }
  navEditCadastro() {
    this.navCtrl.navigateForward('editarcadastro');
  }
  exibiSearchbar() {
    this.visibleSearchbar = !this.visibleSearchbar;
  }

 

  getter() {
    this.funcionariosService.getFuncionarios().subscribe(
      (data: funcionarios) => {
        this.funcs = data;
        this.getCor(this.funcs.situacao.descricao);
        console.log('a variavel', this.funcs);
        console.log('o data q recebemos', data);               
      },
      (error: any) => {
        this.erro = error;
        console.log('ERROR: ', error);
      })
  }

  getCor(situa){
    switch (situa) {
      case 'Ativo':
          return 'green';
        break;
    }                         
  }
}
