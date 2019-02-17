import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronParallaxComponent } from './jumbotron-parallax/jumbotron-parallax.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AcordeonBotoneraComponent } from './acordeon-botonera/acordeon-botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    JumbotronParallaxComponent,
    ArticulosComponent,
    AcordeonBotoneraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
