import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, ElementRef, QueryList, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

    @Input() pregunta: any;
    @Input() preguntaIndex: any;
    @Input() preguntas: any;
    @Input() results: any;
    @Output() result: EventEmitter<any> = new EventEmitter();
    respuestas: any = [];

    @ViewChildren('dropBoxesRef') dropBoxesRef: QueryList<ElementRef>;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnChanges() { 
        this.respuestas = [];
        let dragBoxes = this.pregunta.dragBoxes;
        let corrects = this.pregunta.corrects;
        for(let i=0; i < corrects.length; i++) {
            this.respuestas.push({drags:[]});
            let drops = corrects[i].drags;
            for (let j=0; j < drops.length; j++ ) { 
                this.respuestas[i].drags.push('');
            }
        }
        let respuestasF = this.respuestas;
        $(document).ready(function() {
            $(function() {
                for(let i=0; i < dragBoxes.length; i++) {
                    $("#caja" + i ).draggable({
                        helper: function() {
                            var helper = $(this).clone(); 
                            helper.css({'position': 'static', 'width': '300px'});
                            return helper;
                        }
                    });
                }
                for(let i=0; i < corrects.length; i++) {
                    let drops = corrects[i].drags;
                    for (let j=0; j < drops.length; j++ ) {
                        $("#cajon" + i + j).droppable({
                            drop: function( event, ui ) {
                                var idEl = "#" + ui.helper[0].id;
                                $(this).append($(idEl));
                                $(this).css({'position':'static'});
                                respuestasF[i].drags[j] = $(this)[0].innerText;  
                            }
                        });
                    }
                }
                $('.col-drag-boxes').droppable({
                    drop: function( event, ui ) {
                        var idEl = "#" + ui.helper[0].id;
                        $(this).append($(idEl));
                        $(this).css({'position':'static'})
                    }
                });
            });
        });
    }

    ngOnInit() {
        let dragBoxes = this.pregunta.dragBoxes;
        let corrects = this.pregunta.corrects;
        for(let i=0; i < corrects.length; i++) {
            this.respuestas.push({drags:[]});
            let drops = corrects[i].drags;
            for (let j=0; j < drops.length; j++ ) { 
                this.respuestas[i].drags.push('');
            }
        }
        let respuestasF = this.respuestas;
        $(document).ready(function() {
            $(function() {
                for(let i=0; i < dragBoxes.length; i++) {
                    $("#caja" + i ).draggable({
                        helper: function() {
                            var helper = $(this).clone(); 
                            helper.css({'position': 'static', 'width': '300px'});
                            return helper;
                        }
                    });
                }
                for(let i=0; i < corrects.length; i++) {
                    let drops = corrects[i].drags;
                    for (let j=0; j < drops.length; j++ ) {
                        $("#cajon" + i + j).droppable({
                            drop: function( event, ui ) {
                                var idEl = "#" + ui.helper[0].id;
                                $(this).append($(idEl));
                                $(this).css({'position':'static'});
                                respuestasF[i].drags[j] = $(this)[0].innerText;  
                            }
                        });
                    }
                }
                $('.col-drag-boxes').droppable({
                    drop: function( event, ui ) {
                        var idEl = "#" + ui.helper[0].id;
                        $(this).append($(idEl));
                        $(this).css({'position':'static'})
                    }
                });
            });
        });
    }

    changeQuestion(e) {
        this.cd.detectChanges();
        this.dropBoxesRef.forEach((elem, i) => {
            if (elem.nativeElement.innerText) {
                this.respuestas[i] = elem.nativeElement.innerText;
            } else {
                this.respuestas[i] = '';
            }
        });
        let correctsOrder = [];
        for(let i=0; i < this.pregunta.corrects.length; i++) {
            let drags = this.pregunta.corrects[i].drags;
            for (let j=0; j < drags.length; j++ ) { 
                correctsOrder.push(drags[j]);
            }
        }
        let score = {};
        this.results[this.preguntaIndex].answersChecked[0] = this.respuestas;
        if (String(correctsOrder) === String(this.respuestas)) {
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
