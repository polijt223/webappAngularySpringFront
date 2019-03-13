import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
import Swal from 'sweetalert2';
import {AuthService} from './auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = "Iniciar Sesion"
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {

    if (this.authService.isAuthenticated()) {
      Swal.fire({ title: "Logueo", text: `Hola ${this.authService.usuario.username}, ya estás logueado `, type: 'info', confirmButtonText: 'Aceptar'});
      this.router.navigate(['/clientes']);
    }

  }

  login(): void{
    if (this.usuario.username == null || this.usuario.password == null ) {
      Swal.fire({ title: "Error Loguin", text: "Usuario o Password vacías!", type: 'error', confirmButtonText: 'Aceptar'});
      return; //para salir del if
    }
    
    this.authService.login(this.usuario).subscribe(response =>{
      //console.log(response);
      //Uso y decodificacion del rs256
      //let payload = JSON.parse(atob(response.access_token.split(".")[1]));
      //console.log(payload);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;

      this.router.navigate(['/home']);
      
      Swal.fire({ title: "Logueo éxitoso!", text: `Hola ${usuario.username} , has iniciado sesión !`, type: 'success', confirmButtonText: 'Aceptar'});
    }, err => {
      if (err.status == 400) {
        Swal.fire({ title: "Error de Logueo", text: "Usuairo o clave incorrectas! ", type: 'error', confirmButtonText: 'Aceptar'});
      }
    } );


  }


}
