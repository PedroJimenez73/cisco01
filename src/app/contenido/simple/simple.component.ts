import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})

export class SimpleComponent implements OnInit {

    @Input() pregunta: any;
    @Input() preguntaIndex: any;
    @Input() preguntas: any;
    @Input() results: any;
    @Output() result: EventEmitter<any> = new EventEmitter();
    form: FormGroup;
    abcAnswers = ['A','B','C','D','E','F','G','H','I','J'];

    constructor(private ff: FormBuilder) { }

    ngOnChanges() {
        this.form = this.ff.group({
            answerRadio: ''
        });
        if(this.results[this.preguntaIndex].answersChecked[0] !== '') {
            this.form.get('answerRadio').patchValue(this.results[this.preguntaIndex].answersChecked[0],{emitEvent: false});
        } else {
            this.form.get('answerRadio').patchValue('',{emitEvent: false});
        }
    }

    ngOnInit() {

    }



    changeQuestion(e) {
        let score;
        this.results[this.preguntaIndex].answersChecked[0] = this.form.get('answerRadio').value;
        if (String(this.results[this.preguntaIndex].answersChecked[0]) === String(this.preguntas[this.preguntaIndex].corrects[0])) {
            score = {index: this.preguntaIndex, result: true};
        } else {
            score = {index: this.preguntaIndex, result: false};
        }
        if(e !== 0) {
            this.preguntaIndex += e;
            this.result.emit({score: score, preguntaIndex: this.preguntaIndex, finished: false});
        } else {
            this.result.emit({score: score, preguntaIndex: this.preguntaIndex, finished: true});
        }
    }

}
