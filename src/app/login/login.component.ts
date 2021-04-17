import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(`User: ${this.username}, Password: ${this.password}`)
  }
  preparaCadastrar(event: any){
    event.preventDefault();
    this.cadastrando = true;
  }
  cancelaCadastro(){
    this.cadastrando=false;
  }
}
