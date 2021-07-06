import { funcionarios } from './../models/funcionarios.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpContext,  HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class RhwebService {

  constructor(private http: HttpClient) { }
  //Funcionarios
  public getFuncionarios():Observable<any>{
    var logToken = localStorage.getItem('acessToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + logToken
   });
    return this.http.get('https://rh-web-api.herokuapp.com/funcionarios/ativos', { headers: reqHeader })
  }

  //Funcionarios Desligados
  public getFuncionariosDesligados():Observable<any>{
    var logToken = localStorage.getItem('acessToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + logToken
   });
    return this.http.get('https://rh-web-api.herokuapp.com/funcionarios/desligados', { headers: reqHeader })
  }

  //Login Adm
  public loginFunAdm(usuario: any, senha: any):Observable<any>{
    const body = {usuario,senha}
    console.log(body);
    return this.http.post('https://rh-web-api.herokuapp.com/login', body)
  }

  //Novo Cadastro
  public CadastraFuncionario(NovoFuncionario: any):Observable<any>{
    var EnviaToken = localStorage.getItem('acessToken')
    console.log(EnviaToken);
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + EnviaToken
   });

   const body = JSON.stringify(NovoFuncionario);
   console.log('chegou e veio como json: ', body);
    return this.http.post('https://rh-web-api.herokuapp.com/funcionario/novo', body, { headers: reqHeader })
  }

   //Beneficios
   public getBeneficios():Observable<any>{
    var logToken = localStorage.getItem('acessToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + logToken
   });
    return this.http.get('https://rh-web-api.herokuapp.com/beneficios/listar', { headers: reqHeader })
  }

   //Deleta Beneficios
   public deleteBeneficios(id):Observable<any>{
    var logToken = localStorage.getItem('acessToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + logToken
   });

   var beneficio = id;

    return this.http.delete('https://rh-web-api.herokuapp.com/beneficio/' + id, { headers: reqHeader })
  }

}
