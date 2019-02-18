import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente:Cliente = new Cliente();

  constructor(private clienteService: ClienteService,
  private router:Router,
  private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if (id) {
          this.clienteService.getCliente(id).subscribe((cliente)=> this.cliente= cliente)
      }
    })
  }

  create(): void{
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      Swal.fire({
        title: 'Cliente Guardado',
        text: `El Cliente ${cliente.nombre} se guardo correctamente`,
        type: 'success',
        confirmButtonText: 'Aceptar'
      })
    }
    );
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(cliente=>{
        this.router.navigate(['/clientes'])
        Swal.fire({
          title: 'Cliente Modificado',
          text: `El Cliente ${cliente.nombre} se actualizo correctamente`,
          type: 'success',
          confirmButtonText: 'Aceptar'
        })
    }
  )
  }

}
