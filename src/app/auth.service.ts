import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrlBase: string = environment.apiUrlBase+"/api/usuarios"
  
  constructor(private http: HttpClient) {

   }
   salvar(usuario: Usuario) : Observable<any>{
     return this.http.post<any>(this.apiUrlBase, usuario);
   }
}
