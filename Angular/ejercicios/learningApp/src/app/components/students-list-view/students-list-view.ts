import { Component, Input } from '@angular/core';
import { StudentModel } from '../../models/student_model';
import { ItemRowStudent } from '../item-row-student/item-row-student';

@Component({
  selector: 'students-list-view',
  imports: [ItemRowStudent],
  templateUrl: './students-list-view.html',
})
export class StudentsListView {
  @Input()students!: StudentModel[];

}
