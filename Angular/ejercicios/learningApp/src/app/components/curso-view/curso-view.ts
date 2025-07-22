import { Component, Input } from '@angular/core';
import { CourseModel } from '../../models/couser_model';

@Component({
  selector: 'curso-view',
  imports: [],
  templateUrl: './curso-view.html',
})
export class CursoView {
  @Input()coursespro!: CourseModel;
}
