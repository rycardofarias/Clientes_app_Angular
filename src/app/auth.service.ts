import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrlBase: string = environment.apiUrlBase+"/api/usuarios";
  tokenURL: string = environment.apiUrlBase + environment.obterTokenURL;
  clienteId: string = environment.clienteId;
  clienteSecret: string = environment.clienteSecret;
  
  constructor(private http: HttpClient) {

   }
   salvar(usuario: Usuario) : Observable<any>{
     return this.http.post<any>(this.apiUrlBase, usuario);
   }

   tentarLogar( username: string, password: string) : Observable<any> {
     const params = new HttpParams()
                          .set('username', username)
                          .set('password', password)
                          .set('grant_type', 'password')
      const headers = {
        'Autorization' : 'Basic '+ btoa(`${this.clienteId}:${this.clienteSecret}`),
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
      return this.http.post( this.tokenURL, params.toString(), {headers})
   }
}
