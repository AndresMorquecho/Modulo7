import { Component, Input } from '@angular/core';
import { StudentModel } from '../../models/student_model';

@Component({
  selector: 'tr[item-row-student]',
  standalone: true,
  imports: [],
  templateUrl: './item-row-student.html',
})
export class ItemRowStudent {
  @Input()item!: StudentModel;
}
