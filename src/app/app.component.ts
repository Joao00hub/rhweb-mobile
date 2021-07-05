import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RhwebService } from '../app/services/rhweb.service';
import { funcionarios } from '../app/models/funcionarios.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private funcionariosService: RhwebService) { 
  }

  // funcs: any;
  // erro: any;
  // classSitua: any;
  // final: any;
  // teste: any;
  // testeCorrigido: any;

  fechaMenu() 
  {  
    this.menu.close();
  }

  goToHome(){
    this.menu.close();
    localStorage.setItem('acessToken', "");
    var testeToken = localStorage.getItem('acessToken')
      console.log('o token na sessão é: ',testeToken); 
  }

  // getter() {
  //   this.funcionariosService.getFuncionarios().subscribe(
  //     (data: funcionarios) => {
  //       this.funcs = data;
        
  //       this.funcs.forEach(element => {
  //         this.teste = element.dtAdm;
  //         if (this.teste == undefined){
  //           this.final = "2022";
  //         }else{
  //           console.log('final do split: ', this.teste);
  //           this.testeCorrigido = this.teste.split('/');
  //           this.final = this.testeCorrigido[2] + "-PRESENTE";
  //           console.log('final do split: ', this.final[2]);
  //         }    
  //       });         
  //       console.log('a variavel', this.funcs);
  //       console.log('o data q recebemos', data);   
  //       this.menu.close();            
  //     },
  //     (error: any) => {
  //       this.erro = error;
  //       console.log('ERROR: ', error);
  //       this.menu.close();
  //     })
  // }
}
