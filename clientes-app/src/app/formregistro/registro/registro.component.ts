import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/usuarios/usuario';
import { AuthService } from 'src/app/usuarios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  private errores: string[];
  private usuario: Usuario = new Usuario();

  constructor(private usuarioService:UsuariosService,
              private router:Router,
              private activateRoute: ActivatedRoute,
              private authService:AuthService
              ) {  } 
              

  ngOnInit() {
   
  }

 
  

  create(): void{
    //this.usuario.roles = [{"nombre": "ROLE_USER" },{"nombre": "ROLE_ADMIN" }];
    
    //console.log(this.usuario);
    
    this.usuarioService.create(this.usuario)
    .subscribe( usuario => {
      Swal.fire({title: 'Cliente Usuario',text: `El Usuario se registro correctamente`,type: 'success',confirmButtonText: 'Aceptar' });
      this.router.navigate(['/login']);
      
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código de error desde el backend: ' + err.status);
      console.error(err.error.errors);
    }
    );
    
    let usuarioVacio = new Usuario();
    this.usuario = usuarioVacio;
  }

}
