import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getCliente(): Cliente{
    let cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = "999999";
    return cliente;
  }
}
