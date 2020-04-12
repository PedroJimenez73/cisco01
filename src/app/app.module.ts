import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comunes/header/header.component';
import { Diapo1Component } from './contenido/diapo1/diapo1.component';
import { LoadDirective } from './directivas/load.directive';
import { PantallaComponent } from './pantalla/pantalla.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { Diapo2Component } from './contenido/diapo2/diapo2.component';
import { PortadaComponent } from './contenido/portada/portada.component';
import { MultiComponent } from './contenido/multi/multi.component';
import { SimpleComponent } from './contenido/simple/simple.component';
import { SimpleFeedbackComponent } from './contenido/simple-feedback/simple-feedback.component';
import { MultiFeedbackComponent } from './contenido/multi-feedback/multi-feedback.component';
import { DragDropComponent } from './contenido/drag-drop/drag-drop.component';
import { DragDropFeedbackComponent } from './contenido/drag-drop-feedback/drag-drop-feedback.component';
import { RelojPipe } from './reloj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Diapo1Component,
    LoadDirective,
    PantallaComponent,
    FooterComponent,
    Diapo2Component,
    PortadaComponent,
    MultiComponent,
    SimpleComponent,
    SimpleFeedbackComponent,
    MultiFeedbackComponent,
    DragDropComponent,
    DragDropFeedbackComponent,
    RelojPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    PortadaComponent, 
    Diapo1Component,
    Diapo2Component
  ]
})
export class AppModule { }
