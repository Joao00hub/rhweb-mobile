import { Component, OnInit } from '@angular/core';
import { funcionarios } from './../models/funcionarios.model';
import { RhwebService } from './../services/rhweb.service';

@Component({
  selector: 'app-funcionarios-desligados',
  templateUrl: './funcionarios-desligados.page.html',
  styleUrls: ['./funcionarios-desligados.page.scss'],
})
export class FuncionariosDesligadosPage implements OnInit {
  visibleSearchbar: boolean = false;
  constructor(private funcionariosService: RhwebService) { 
    this.getter();
  }

  funcsDesligados: any;
  erroDesligados: any;
  // classSitua: any;
  // final: any;
  // teste: any;
  // testeCorrigido: any;

  ngOnInit() {
  }
  exibiSearchbar()
  {
      this.visibleSearchbar = !this.visibleSearchbar;
  }

  getter() {
    this.funcionariosService.getFuncionariosDesligados().subscribe(
      (data: funcionarios) => {
        this.funcsDesligados = data;
        
        // this.funcs.forEach(element => {
        //   this.teste = element.dtAdm;
        //   if (this.teste == undefined){
        //     this.final = "2022";
        //   }else{
        //     console.log('final do split: ', this.teste);
        //     this.testeCorrigido = this.teste.split('/');
        //     this.final = this.testeCorrigido[2] + "-PRESENTE";
        //     console.log('final do split: ', this.final[2]);
        //   }    
        // });

         
        console.log('a variavel', this.funcsDesligados);
        console.log('o data q recebemos', data);               
      },
      (error: any) => {
        this.erroDesligados = error;
        console.log('ERROR: ', error);
      })
  }
}
