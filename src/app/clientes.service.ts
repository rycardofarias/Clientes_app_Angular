import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente{
    let cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = "999999";
    return cliente;
  }
}
