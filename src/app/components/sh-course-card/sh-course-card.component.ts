import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'sh-course-card',
  templateUrl: './sh-course-card.component.html',
  styleUrls: ['./sh-course-card.component.scss']
})
export class ShCourseCardComponent {
  course:Course ={
    title:'Course Name',
    description:'Course Description Course Description Course Description Course Description Course Description Course Description',
    image:'../../../assets/images/ibm.jpg',
    price:100,
    rating:4.8
  }
}
