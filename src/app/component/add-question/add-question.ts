import {booleanAttribute, Component} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';




@Component({
  selector: 'app-add-question',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './add-question.html',
  styleUrl: './add-question.css',
})
export class AddQuestion {

  public form : any;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      questionType: ['MultipleAnswerQuestion', Validators.required],
      questionText: ['', Validators.required],
      answers: this.fb.array([]),
    })
    this.addAnswer()
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

    console.log(this.form.value);
  }


}
