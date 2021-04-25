import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  erros: String[];


  constructor(
    private router: Router,
    private authService : AuthService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(`User: ${this.username}, Password: ${this.password}`)
    this.router.navigate(['/home'])
  }
  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }
  cancelaCadastro(){
    this.cadastrando=false;
  }
  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
          .salvar(usuario)
          .subscribe( response => {
            this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login"
          },errorResponse => {
            this.mensagemSucesso=null;
            this.erros = errorResponse.error.erros;
          })
  }
}
