import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  private courseArray = ["Course1", "Course2", "Course3"];
  
  constructor() { }
  
  getCourses() : string[] {
    return this.courseArray;
  }

  saveCourse(nCourse: string) : void {
    this.courseArray.push(nCourse);
  }
  
  
}
