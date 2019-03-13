import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router :Router) {

   }

  ngOnInit() {
  }

  logout():void{
    let username = this.authService.usuario.username;
    this.authService.logout();
    this.router.navigate(["/home"]);
    Swal.fire({ title: "Cerro Session", text: `Acaba de cerrar sesión correctamente ${username}`, type: 'success', confirmButtonText: 'Aceptar'});
    
  }

}
