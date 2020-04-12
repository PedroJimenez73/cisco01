import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-feedback',
  templateUrl: './multi-feedback.component.html',
  styleUrls: ['./multi-feedback.component.scss']
})
export class MultiFeedbackComponent implements OnInit {

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
        answers: new FormArray([])
      });
      this.pregunta.answers.forEach(elem => {
        const control = new FormControl();
        (this.form.controls.answers as FormArray).push(control);
      });
      if(String(this.results[this.preguntaIndex].answersChecked) !== String([''])) {
        (this.form.get("answers") as FormArray).patchValue(this.results[this.preguntaIndex].answersChecked);
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
        this.elementosLabelsRef.forEach((elem, i) => {
          if (this.preguntas[this.preguntaIndex].corrects[i]) {
            elem.nativeElement.classList.add('correcta');
          } else if (this.preguntas[this.preguntaIndex].corrects[i] === '' && this.results[this.preguntaIndex].answersChecked[i] !== '') {
            elem.nativeElement.classList.add('incorrecta');
          }
        });
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
