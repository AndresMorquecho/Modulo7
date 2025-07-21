import { Component, OnInit } from '@angular/core';
import { Courses } from '../../services/courses.service';
import { CourseModel } from '../../models/couser_model';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
})
export class Course implements OnInit {
  courses!: CourseModel;
  constructor(private service: Courses) {}
  ngOnInit(): void {
    this.courses = this.service.getCousers(); 
  }
}
