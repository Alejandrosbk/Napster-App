import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor( private router: Router, private authService: AuthService, private toastr: ToastrService, private cookie: CookieService ) { }

  // HACEMOS LAS VALIDACIONES DE LOS INPUTS
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)])
      }
    )
  }

  // FUNCION PARA ENVIAR LOS DATOS QUE CAPTURA EL FORM HACIA EL SERVICIO
  sendLogin() {
    const {email, password} = this.formLogin.value;

    // NOS SUSCRIBIMOS AL OBSERVABLE PARA PODER USARLO
    this.authService.sendCredentials(email, password)
    .subscribe(response => { //TODO:CUANDO EL USUARIO INGRESA CREDENCIALES CORRECTAS 200-400  
      console.log('sesion iniciada ok', response);
      const { tokenSession, data } = response;
      this.cookie.set('token', tokenSession, 4, '/');
      setTimeout(() => {
        this.toastr.success('Sesión Completada', 'Has iniciado sesión!');
      }, 500);
      this.router.navigate(['/', 'songs']);
    },err => {  //TODO: CUANDO LAS CREDENCIALES SON INCORRECTAS 400>
      console.log('error de sesion, revisa tus credenciales!');
      setTimeout(() => {
        this.toastr.error('Error de sesión', 'Revisa tus credenciales!');
      }, 500);
    }); 
  }

}
