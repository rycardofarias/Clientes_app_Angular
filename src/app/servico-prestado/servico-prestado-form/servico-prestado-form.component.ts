import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  success: boolean = false;
  erros: String[];

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado()
  }

  ngOnInit(): void {
    this.clienteService.getClientes()
          .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.servicoPrestadoService
      .salvar(this.servico)
      .subscribe( response =>{
        this.success = true;
        this.erros = null;
        this.servico = new ServicoPrestado();        
      },
      errorResponse =>{
        this.success = false;
        this.erros = errorResponse.error.erros
      })
  }

}
