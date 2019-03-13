import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronParallaxComponent } from './jumbotron-parallax/jumbotron-parallax.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AcordeonBotoneraComponent } from './acordeon-botonera/acordeon-botonera.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';

registerLocaleData(localeEsAr, 'es');

const routes: Routes =  [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/page/:page', component:ClientesComponent},
  {path:'clientes/form', component:FormComponent},
  {path:'clientes/form/:id', component:FormComponent},
  {path:'home', component:CarouselComponent},
  {path:'login', component:LoginComponent},
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
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [ClienteService,{provide: LOCALE_ID, useValue:'es-AR'}],
             
  bootstrap: [AppComponent]
})
export class AppModule { }
