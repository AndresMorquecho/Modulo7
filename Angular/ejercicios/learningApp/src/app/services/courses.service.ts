import { Injectable } from '@angular/core';
import { studentdata } from '../data/student_data';
import { CourseModel } from '../models/couser_model';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  private couserdata: CourseModel = studentdata;

  constructor() {}

  getCousers(): CourseModel {
    return this.couserdata;
  }
}
