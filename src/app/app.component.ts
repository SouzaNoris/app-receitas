import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-receitas';

  form = this.fb.group({
    lessons: this.fb.array([])
  })

  constructor(private fb: FormBuilder) {}

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });

    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number): void {
    this.lessons.removeAt(lessonIndex);
  }
}
