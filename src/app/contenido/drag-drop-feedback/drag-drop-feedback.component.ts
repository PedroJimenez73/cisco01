import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-drag-drop-feedback',
  templateUrl: './drag-drop-feedback.component.html',
  styleUrls: ['./drag-drop-feedback.component.scss']
})
export class DragDropFeedbackComponent implements OnInit {

    @Input() pregunta: any;
    @Input() preguntaIndex: any;
    @Input() preguntas: any;
    @Input() results: any;
    @Input() successes: any;
    @Output() navFeedback: EventEmitter<any> = new EventEmitter();
    respuestas: any;

    abcAnswers = ['A','B','C','D','E','F','G','H','I','J'];

    @ViewChildren('labelsRef') labelsRef: QueryList<ElementRef>;
    elementosLabelsRef = [];

    questionCorrecta = false;
    questionIncorrecta = false;

    constructor() { }

    ngOnInit() {
        if(this.successes[this.preguntaIndex]) {
          this.questionIncorrecta = false;
          this.questionCorrecta = true;
        } else {
          this.questionCorrecta = false;
          this.questionIncorrecta = true;
        }
    }

    changeFeedback(e) {
        this.preguntaIndex += e;
        this.navFeedback.emit({preguntaIndex: this.preguntaIndex});
    }

}
