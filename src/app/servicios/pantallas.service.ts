import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pantalla } from '../modelos/pantalla.models';
import { PortadaComponent } from '../contenido/portada/portada.component';
import { Diapo1Component } from '../contenido/diapo1/diapo1.component';
import { Diapo2Component } from '../contenido/diapo2/diapo2.component';

declare var window: any;

@Injectable({
  providedIn: 'root'
})

export class PantallasService {

  currentPage: any = 0;
  private indiceIn = new BehaviorSubject<any>({indice: 0, total: 0});
  pantallas = [
    new Pantalla(PortadaComponent, {titulo: "Evaluaciones Cisco"}),
    new Pantalla(Diapo1Component, {titulo: "Preguntas de evaluación"}),
    new Pantalla(Diapo2Component, {titulo: "Preguntas de autocomprobación"}),
  ]

  get indice() {
    return this.indiceIn.asObservable();
  }

  constructor() { 
    setTimeout(()=> {
      if(window.ScormProcessGetValue("cmi.location", false)){
        this.currentPage = window.ScormProcessGetValue("cmi.location", false);
        this.navToPage();
      }
    }, 500);
  }

  getPantallas() {
    return this.pantallas;
  }

  nextPage() {
    this.currentPage++;
    this.navToPage();
  }

  prevPage() {
    this.currentPage--;
    this.navToPage();
  }

  navFromMenu(e) {
    this.currentPage = e;
    this.navToPage();
  }
  
  navToPage() {
    this.indiceIn.next({indice: this.currentPage, total: this.pantallas.length});
    window.ScormProcessSetValue('cmi.location', (this.currentPage).toString());
    if (this.currentPage === (this.pantallas.length - 1)){
        // reachedEnd = true;
        window.ScormProcessSetValue("cmi.completion_status", "completed");
    }
  }

  exit() {
    window.open(window.location, '_self').close();
    window.ScormProcessSetValue("cmi.exit", "suspend");
  }

}
