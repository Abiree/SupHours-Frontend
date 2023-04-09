import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'sh-course-sidebar-detail',
  templateUrl: './sh-course-sidebar-detail.component.html',
  styleUrls: ['./sh-course-sidebar-detail.component.scss']
})
export class ShCourseSidebarDetailComponent {
  @Input() course:Course|null = null;
}
