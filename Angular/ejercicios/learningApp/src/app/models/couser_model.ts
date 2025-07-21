import { StudentModel } from './student_model';

export class CourseModel {
  id!: number;
  name!: string;
  students!: StudentModel[];
}
