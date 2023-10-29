import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../authservice/auth.service';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  errorMessage: string;
  users: any[]=[];

  constructor(private authService : AuthService, private router: Router){}

  usuarioLogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })


    //metodo para iniciar sesion con datos parametrizados
    login(){

    this.authService.login(this.usuarioLogin.value as UsuarioInterface).subscribe(
      (response) => {
        console.log("Inicio de sesion correcto");
        this.router.navigate(['productos']);
      },
      error => {
        console.error("Credenciales Incorrectas");
        this.errorMessage = "Correo o contraseña incorrectos";
      }
    );
  }
}


