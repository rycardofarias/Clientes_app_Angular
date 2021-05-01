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
    this.authService
      .tentarLogar(this.username, this.password)
      .subscribe(response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/home'])
      }, erroResponse => {
        this.erros =['Usuário e/ou senha incorreta(s).']
      })
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
            this.cadastrando = false;
            this.username=''
            this.password=''
            this.erros=[]
          },errorResponse => {
            this.mensagemSucesso=null;
            this.erros = errorResponse.error.erros;
          })
  }
}
