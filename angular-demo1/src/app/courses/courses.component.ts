import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  title = "The title of courses page";
  courses;
  update;
  
  constructor(private coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }
  
  onClickMe(newCourse: string){
    
    this.update = this.coursesService.saveCourse(newCourse);
    
  }
  
  ngOnInit() {
  }

}
