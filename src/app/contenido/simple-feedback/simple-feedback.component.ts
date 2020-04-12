import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-feedback',
  templateUrl: './simple-feedback.component.html',
  styleUrls: ['./simple-feedback.component.scss']
})

export class SimpleFeedbackComponent implements OnInit {

    @Input() pregunta: any;
    @Input() preguntaIndex: any;
    @Input() preguntas: any;
    @Input() results: any;
    @Input() successes: any;
    @Output() navFeedback: EventEmitter<any> = new EventEmitter();
    form: FormGroup;
    abcAnswers = ['A','B','C','D','E','F','G','H','I','J'];

    @ViewChildren('labelsRef') labelsRef: QueryList<ElementRef>;
    elementosLabelsRef = [];

    questionCorrecta = false;
    questionIncorrecta = false;

    constructor(private ff: FormBuilder,
                private cd: ChangeDetectorRef) { }

    ngOnChanges() {
        this.form = this.ff.group({
            answerRadio: ''
        });
        if(this.results[this.preguntaIndex].answersChecked[0] !== '') {
            this.form.get('answerRadio').patchValue(this.results[this.preguntaIndex].answersChecked[0],{emitEvent: false});
        }
        setTimeout(()=>{
            if(this.successes[this.preguntaIndex]) {
                this.questionIncorrecta = false;
                this.questionCorrecta = true;
            } else {
                this.questionCorrecta = false;
                this.questionIncorrecta = true;
            }
            this.cd.detectChanges();
            this.elementosLabelsRef = [];
            this.labelsRef.forEach(elem => {
                this.elementosLabelsRef.push(elem);
            })
            this.elementosLabelsRef.forEach(elem => {
                elem.nativeElement.classList.remove('incorrecta');
                elem.nativeElement.classList.remove('correcta');
            });
            let indexCorrecta = this.abcAnswers.indexOf(this.preguntas[this.preguntaIndex].corrects[0])
            let indexResult = this.abcAnswers.indexOf(this.results[this.preguntaIndex].answersChecked[0])
            this.elementosLabelsRef[indexCorrecta].nativeElement.classList.add('correcta');
            if (indexResult !== indexCorrecta) {
                this.elementosLabelsRef[indexResult].nativeElement.classList.add('incorrecta');
            }
        },300);
    }

    ngOnInit() {

    }

    changeFeedback(e) {
        // let successes = []
        // this.results[this.preguntaIndex].answersChecked[0] = this.form.get('answerRadio').value;
        // if (String(this.results[this.preguntaIndex].answersChecked[0]) === String(this.preguntas[this.preguntaIndex].corrects[0])) {
        //     successes[this.preguntaIndex] = true;
        // }
        this.preguntaIndex += e;
        this.navFeedback.emit({preguntaIndex: this.preguntaIndex});
    }

}
