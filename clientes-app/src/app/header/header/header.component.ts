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
  authServiceH: AuthService;

  constructor(private authService: AuthService, private router :Router) {
    this.authServiceH = this.authService;
   }

  ngOnInit() {
  }

  logout():void{
    let username = this.authServiceH.usuario.username;
    this.authServiceH.logout();
    this.router.navigate(["/home"]);
    Swal.fire({ title: "Cerro Session", text: `Acaba de cerrar sesión correctamente ${username}`, type: 'success', confirmButtonText: 'Aceptar'});
    
  }

}
