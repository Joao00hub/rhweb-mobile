import { Component, OnInit } from '@angular/core';
import { RhwebService } from './../services/rhweb.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
})
export class BeneficiosPage implements OnInit {

  constructor(private funcionariosService: RhwebService, private navCtrl: NavController) { 
    this.getter();
  }

  beneficios: any;
  erro: any;
  erroDelete: any;
  beneficioDeletado: any;

  ngOnInit() {
  }
  getter() {
    this.funcionariosService.getBeneficios().subscribe(
      (data) => {
        this.beneficios = data;       
        console.log('a variavel', this.beneficios);
        console.log('o data q recebemos', data);               
      },
      (error: any) => {
        this.erro = error;
        console.log('ERROR: ', error);
      })
  }
  
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    console.log(value);
    this.funcionariosService.deleteBeneficios(value).subscribe(
      (data) => {
        this.beneficioDeletado = data;       
        console.log('a resposta delete', this.beneficioDeletado);
        console.log('o data q recebemos delete', data);               
      },
      (error: any) => {
        this.erroDelete = error;
        console.log('ERROR: ', this.erroDelete);
      })
  }


  pegaIdEdita(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    var final = value.replace("p","")
    this.navCtrl.navigateForward('edita-beneficio');
    console.log(final);
  }
}
