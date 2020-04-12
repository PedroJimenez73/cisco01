import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {

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
            answers: new FormArray([])
        });
        this.pregunta.answers.forEach(elem => {
            const control = new FormControl();
            (this.form.controls.answers as FormArray).push(control);
        });
        if(String(this.results[this.preguntaIndex].answersChecked) !== String([''])) {
            (this.form.get("answers") as FormArray).patchValue(this.results[this.preguntaIndex].answersChecked);
        } else {
            (this.form.get("answers") as FormArray).patchValue([]);
        }
    }

    ngOnInit() {

    }

    changeQuestion(e) {
        let score = {};
        let multiAnswers = [];
        this.form.value.answers.forEach((input,i) => {
            if(input){
                multiAnswers.push(this.abcAnswers[i]);
            } else {
                multiAnswers.push('');
            }
        });
        this.results[this.preguntaIndex].answersChecked = multiAnswers;
        if (String(this.results[this.preguntaIndex].answersChecked) === String(this.preguntas[this.preguntaIndex].corrects)) {
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
