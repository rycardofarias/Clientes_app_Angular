import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrlBase: string= environment.apiUrlBase + '/api/clientes';

  constructor(private http:HttpClient) { }

  salvar (cliente: Cliente): Observable<Cliente>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer '+ token.access_token
    }
    return this.http.post<Cliente>(`${this.apiUrlBase}`, cliente , { headers });
  }

  atualizar (cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiUrlBase}/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer '+ token.access_token
    }
    return this.http.get<Cliente[]>(this.apiUrlBase, { headers });
  }
  getClientesById(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrlBase}/${id}`);
  }
  deletar(cliente: Cliente) : Observable<any>{
    return this.http.get<any>(`${this.apiUrlBase}/${cliente.id}`);
  }
}
