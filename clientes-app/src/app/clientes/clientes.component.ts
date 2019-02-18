import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
     this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
     );

  }

  delete(cliente: Cliente): void{

    const swalWithBootstrapButtons = Swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
    title: 'Eliminar Cliente',
    text: "Estas seguro de eliminar el registros del cliente!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          reponse=> {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            Swal.fire(
            'Cliente eliminado!',
            `Cliente ${cliente.nombre} eliminado con éxito`,
            'success'
            )
          }
        )
      }
    })
    //Fin sweetalert2
  }//fin method delete



}
