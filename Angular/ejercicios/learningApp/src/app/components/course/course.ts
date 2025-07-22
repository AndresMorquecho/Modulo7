import { Component, OnInit } from '@angular/core';
import { Courses } from '../../services/courses.service';
import { CourseModel } from '../../models/couser_model';
import { CursoView } from "../curso-view/curso-view";
import { StudentsListView } from "../students-list-view/students-list-view";

@Component({
  selector: 'app-course',
  imports: [CursoView, StudentsListView],
  templateUrl: './course.html',
})
export class Course implements OnInit {
  courses!: CourseModel;
  constructor(private service: Courses) {}
  ngOnInit(): void {
    this.courses = this.service.getCousers(); 
  }
}
