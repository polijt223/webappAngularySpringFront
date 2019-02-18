import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronParallaxComponent } from './jumbotron-parallax/jumbotron-parallax.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AcordeonBotoneraComponent } from './acordeon-botonera/acordeon-botonera.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

const routes: Routes =  [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/form', component:FormComponent},
  {path:'clientes/form/:id', component:FormComponent},
  {path:'home', component:CarouselComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    JumbotronParallaxComponent,
    ArticulosComponent,
    AcordeonBotoneraComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
