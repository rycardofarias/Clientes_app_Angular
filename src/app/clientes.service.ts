import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  salvar (cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  //getClientes() : Observable<Cliente[]>{
    //return null;
  //}

  //testanto cliente
  getClientes(): Cliente []{
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Ricardo de Sousa Farias";
    cliente.cpf = "12345678900";
    cliente.dataCadastro = "17/02/1996";
    return [cliente];
  }
}
