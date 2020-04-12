import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-diapo2',
  templateUrl: './diapo2.component.html',
  styleUrls: ['./diapo2.component.scss']
})
export class Diapo2Component implements OnInit {

  intentos: any = [];
  totalPassed = 0;

  constructor() { }

  ngOnInit() {
    if(window.ScormProcessGetValue("cmi.suspend_data", false)) {
      let intentosHistory = JSON.parse(window.ScormProcessGetValue("cmi.suspend_data"));
      intentosHistory.forEach(element => {
          element.porcentAciertos = Math.round((element.aciertos / element.numPreguntas) * 100);
          if(element.porcentAciertos >= 80) {
            this.totalPassed++;
          }
      });
      this.intentos = intentosHistory.reverse();
    } else {
      this.intentos = [];
    }
  }


}
