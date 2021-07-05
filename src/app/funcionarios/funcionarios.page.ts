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
  final: any;
  teste: any;
  testeCorrigido: any;

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
        
        this.funcs.forEach(element => {
          this.teste = element.dtAdm;
          if (this.teste == undefined){
            this.final = "2022";
          }else{
            console.log('final do split: ', this.teste);
            this.testeCorrigido = this.teste.split('/');
            this.final = this.testeCorrigido[2] + "-PRESENTE";
            console.log('final do split: ', this.final[2]);
          }    
        });

         
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
