import { funcionarios } from './../models/funcionarios.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RhwebService {

  constructor(private http: HttpClient) { }
  public getFuncionarios():Observable<any>{
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTYyNTQyNjI1MSwiZXhwIjoxNjI1NDI5ODUxfQ.RbEgwOnbTSn8BTo0VPcDb7zBr3kL_Ss8wP0II8F87nY'
   });
    return this.http.get('https://rh-web-api.herokuapp.com/funcionarios/ativos', { headers: reqHeader })
  }
}
