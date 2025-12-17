import {booleanAttribute, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AddQuestionService} from './add-question-service';




@Component({
  selector: 'app-add-question',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './add-question.html',
  styleUrl: './add-question.css',
})
export class AddQuestion implements OnInit {

  public form : any;
  quizId: number = -9999;

  constructor(private fb: FormBuilder, private route : ActivatedRoute,
              private addQuestionService : AddQuestionService) {

    this.form = this.fb.group({
      questionType: ['MultipleAnswerQuestion', Validators.required],
      questionText: ['', Validators.required],
      answers: this.fb.array([]),
    })
    this.addAnswer()
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizId = params['id']; // ID kommt aus der Route
    });
  }

  get answers(){
    return this.form.controls['answers'] as FormArray;
  }


  addAnswer(){
    const lessonForm = this.fb.group({
      answerText: ['', Validators.required],
      correct: [false, Validators.required]
    });


    this.answers.push(lessonForm);
    lessonForm.markAsTouched();

  }

  deleteAnswer(){
    if(this.answers.length > 1){
      this.answers.removeAt(this.answers.length - 1);
    }

  }

  onChange(){
    if(this.questionType == "UserInputQuestion"){
      while(this.answers.length > 1){
        this.answers.removeAt(this.answers.length - 1);
      }
    }
  }

  get questionType(){
    return this.form.controls['questionType'].value;
  }

  onSubmit(){
    let aws = this.answers.value;

    aws.map((answer: { correct: unknown; }) => {
      answer.correct = booleanAttribute(answer.correct);
    })
    console.log(this.answers.value);

    let values = this.form.value;
    values.quizId = this.quizId;

    this.addQuestionService.addQuestion(values).subscribe(x => console.log(x));
  }


}
