import { Component, OnInit } from '@angular/core';
import { RhwebService } from './../services/rhweb.service';

@Component({
  selector: 'app-novocadastro',
  templateUrl: './novocadastro.page.html',
  styleUrls: ['./novocadastro.page.scss'],
})
export class NovocadastroPage implements OnInit {

  constructor(private funcionariosService: RhwebService) { }

  erro: any;
  NovoFunc: any;
  isAdmn: any;
  verificaAdm: any;
  ngOnInit() {
  }

 
  async createEmploye() {
    // this.verificaAdm = (<HTMLInputElement>document.getElementById("funcAdm")).value;

    this.NovoFunc = await setDados();

    async function setDados() {
      // if (this.verificaAdm.checked) {
      //   this.isAdmn = "true";
      // } else {
      //   this.isAdmn = "false";
      // }
      return {
        nome: (<HTMLInputElement>document.getElementById("funcNome")).value,
        cpf: (<HTMLInputElement>document.getElementById("funcCpf")).value,
        dataNascimento: (<HTMLInputElement>document.getElementById("funcDataNasc")).value,
        estadoCivil: "Solteiro(a)",//(<HTMLInputElement>document.getElementById("slctEstado")).value,
        sexo: "Masculino",//(<HTMLInputElement>document.getElementById("slctSexo")).value
        email: (<HTMLInputElement>document.getElementById("funcEmail")).value,
        graduacao: (<HTMLInputElement>document.getElementById("funcGraduado")).value,
        cep: (<HTMLInputElement>document.getElementById("funcCep")).value,
        logradouro: (<HTMLInputElement>document.getElementById("funcRua")).value,
        cidade: (<HTMLInputElement>document.getElementById("funcCidade")).value,
        bairro: (<HTMLInputElement>document.getElementById("funcBairro")).value,
        numero: (<HTMLInputElement>document.getElementById("funcNumero")).value,
        complemento: (<HTMLInputElement>document.getElementById("funcComplemento")).value,
        celular: (<HTMLInputElement>document.getElementById("funcCelular")).value,
        fixo: (<HTMLInputElement>document.getElementById("funcFixo")).value,
        emergencia: (<HTMLInputElement>document.getElementById("funcEmergencia")).value,
        nomeReferencia: (<HTMLInputElement>document.getElementById("funcContatoEmerg")).value,
        parentesco: "Pai", //(<HTMLInputElement>document.getElementById("sltcParentesco")).value,
        deficiencia: (<HTMLInputElement>document.getElementById("funcDefic")).value,
        cargo: (<HTMLInputElement>document.getElementById("funcCargo")).value,
        dtAdm: (<HTMLInputElement>document.getElementById("funcDtContrata")).value,
        ferias: (<HTMLInputElement>document.getElementById("funcDtFerias")).value,
        salario: (<HTMLInputElement>document.getElementById("funcSalario")).value,
        foto: (<HTMLInputElement>document.getElementById("upImage")).value,
        isAdmin: "false",
        situacaoId: 1
      };
    }

    this.funcionariosService.CadastraFuncionario(this.NovoFunc).subscribe(data => {
      console.log(data)
    },
      (error: any) => {
        this.erro = error;
        console.log('ERROR: ', error);
      })

  }

}
