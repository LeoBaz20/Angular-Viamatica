import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) { }


  //consultar a la API los usuarios
  login(user: UsuarioInterface):Observable<any>{
    return this.http.post(this.apiUrl, user);
  }
}
