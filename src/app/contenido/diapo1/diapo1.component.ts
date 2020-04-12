import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PreguntasService } from 'src/app/servicios/preguntas.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { BypassService } from 'src/app/servicios/bypass.service';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

declare var window: any;

@Component({
    selector: 'app-diapo1',
    templateUrl: './diapo1.component.html',
    styleUrls: ['./diapo1.component.scss']
})

export class Diapo1Component implements OnInit {

    preguntasMaster: any;
    preguntasDrag: any;
    selectPreguntas: FormGroup;
    numPreguntas: number;
    intento = { preguntas: [], resultados: [], aciertos: []};
    intentoAnterior = false;
    intentosHistory: any;
    
    showPortada = true;
    showQuestions = false;
    showResults = false;
    showFeedback = false;
    
    preguntas: any = [];
    preguntaIndex = 0;
    pregunta: any;

    results = [];
    successes = [];

    totalAciertos = 0;
    porcentAciertos = 0;

    milisegundos: number = 0;

    doughnutChartLabels: Label[];
    doughnutChartData: MultiDataSet;
    doughnutChartType: ChartType = 'doughnut';
    doughnutChartOptions: ChartOptions = {
        responsive: true,
        legend: {
        display: false
        },
    }
    doughnutChartColors = [];
  
    constructor(private preguntasService: PreguntasService,
                private bypassService: BypassService,
                private ff: FormBuilder) { }

    ngOnInit() {
        if(window.ScormProcessGetValue("cmi.suspend_data", false)) {
            this.intentosHistory = JSON.parse(window.ScormProcessGetValue("cmi.suspend_data"));
        } else {
            this.intentosHistory = [];
        }
        this.selectPreguntas = this.ff.group({
            numPreguntas: null
        });
        this.selectPreguntas.valueChanges.subscribe((data) => {
            this.numPreguntas = Number(data.numPreguntas);
            console.log(this.numPreguntas)
            this.milisegundos = this.numPreguntas * 180 * 1000;
            console.log(this.milisegundos)
        });
    }

    setPreguntas() {
        this.preguntasMaster = this.preguntasService.getPreguntas();
        this.preguntasDrag = this.preguntasService.getPreguntasDrag();
        let preguntaIt;
        let preguntaItDrag;
        for (let i=0; i < (this.numPreguntas * 0.8); i++) {
            preguntaIt = this.preguntasMaster.splice((Math.floor(Math.random() * (this.preguntasMaster.length - i - 1))), 1)
            this.preguntas.push(preguntaIt[0]);
        }
        for (let i=0; i < (this.numPreguntas * 0.2); i++) {
            preguntaItDrag = this.preguntasDrag.splice((Math.floor(Math.random() * (this.preguntasDrag.length - i - 1))), 1)
            this.preguntas.push(preguntaItDrag[0]);
        }
    }

    startEvaluation() {
        this.setPreguntas();
        this.intento.preguntas = this.preguntas;
        this.pregunta = this.preguntas[this.preguntaIndex];
        this.preguntas.forEach(element => {
            this.results.push({answersChecked: ['']});
            this.successes.push(false);
        });
        this.showPortada = false;
        this.showQuestions = true;
        this.startClock();
        this.bypassService.setActFinalizadaFalse();
    }

    startClock() {
        setInterval(()=> {
            this.milisegundos -= 1000;
            if (this.milisegundos === 0) {
                this.finishQuestions();
            }
        }, 1000)
    }

    saveResult(event) {
        this.preguntaIndex = event.preguntaIndex;
        this.pregunta = this.preguntas[this.preguntaIndex];
        this.successes[event.score.index] = event.score.result;
        this.intento.resultados = this.results;
        this.intento.aciertos = this.successes;
        if(event.finished) {
            this.finishQuestions()
        }
        console.log(this.results);
        this.scrollUp();
    }

    finishQuestions() {
        this.showResults = true;
        this.showQuestions = false;
        this.intento.aciertos.forEach(elem => {
            if(elem) {
                this.totalAciertos++;
            }
        });
        this.porcentAciertos = Math.round((this.totalAciertos / this.numPreguntas) * 100);
        let saveIntento = {fecha: new Date(), aciertos: this.totalAciertos, numPreguntas: this.numPreguntas};
        this.intentosHistory.push(saveIntento);
        window.ScormProcessSetValue('cmi.suspend_data', JSON.stringify(this.intentosHistory));
        window.ScormProcessSetValue("cmi.score.raw", this.porcentAciertos);
        window.ScormProcessSetValue("cmi.score.min", "0");
        window.ScormProcessSetValue("cmi.score.max", "100");
        
        if (this.porcentAciertos >= 80){
            window.ScormProcessSetValue("cmi.success_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.success_status", "failed");
        }
        this.bypassService.setActFinalizadaTrue();
        this.loadChartResultados();
    }

    seeFeedback() {
        this.preguntaIndex = 0;
        this.pregunta = this.preguntas[this.preguntaIndex];
        this.showQuestions = false;
        this.showResults = false;
        this.showFeedback = true;
    }

    changeFeedback(event) {
        this.preguntaIndex = event.preguntaIndex;
        this.pregunta = this.preguntas[this.preguntaIndex];
        this.scrollUp();
    }

    scrollUp() {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); 
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

  loadChartResultados() {
    let resto = 100 - this.porcentAciertos;
    let color;
    if(this.porcentAciertos > 80){
      color = '#008489';
    } else if (this.porcentAciertos > 25){
      color = '#ffb822';
    } else {
      color = '#8f0404';
    }
    this.doughnutChartLabels = ['% Correctas','% Incorrectas'];
    this.doughnutChartData = [[this.porcentAciertos, resto ]];
    this.doughnutChartColors = [
      {
        backgroundColor: [ color, 'lightgrey'],
      },
    ];
  }
}
