import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Course } from './app/components/course/course';

bootstrapApplication(Course, appConfig)
  .catch((err) => console.error(err));
