import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { Region } from './Region';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private cliente:Cliente = new Cliente();

  constructor(private clienteService: ClienteService,
  private router:Router,
  private activateRoute: ActivatedRoute) { }
  private errores: string[];
  regiones: Region[];

  ngOnInit() {
    this.cargarCliente();
    
  }

  cargarCliente(): void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if (id) {
          this.clienteService.getCliente(id).subscribe((cliente)=> this.cliente= cliente)
      }
    });

    this.clienteService.getRegiones().subscribe( regiones =>
      {
        this.regiones = regiones;
      });

  }

  create(): void{
    this.clienteService.create(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes']);
      Swal.fire({title: 'Cliente Guardado',text: `El Cliente ${cliente.nombre} se guardo correctamente`,type: 'success',confirmButtonText: 'Aceptar' });
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código de error desde el backend: ' + err.status);
      console.error(err.error.errors);
    }
    );
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(json=>{
        this.router.navigate(['/clientes'])
        Swal.fire({title: 'Cliente Modificado',text: `${json.mensaje} : ${json.cliente.nombre}`,type: 'success',confirmButtonText: 'Aceptar'});
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código de error desde el backend: ' + err.status);
      console.error(err.error.errors);
      }
    );
  }


  compararRegion(o1:Region, o2:Region){

    if (o1 ===undefined && o2===undefined) {
      return true
    }
    //return o1==null || o2==null ? false: o1.id===o2.id;
    //return o1===null || o2===null || o1===undefined || o2===undefined ? false: o1.id===o2.id;
    return o1 && o2 ? o1.id === o2.id : o1 === o2;   
    //Forma de comparar objetos que son atributos, los cuales no puede reconocer el databinding de angular automaticamente
  }

}
