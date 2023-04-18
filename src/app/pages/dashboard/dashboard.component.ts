import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardPage {
  courses=[{name:"course 1"},{name:"course 2"},{name:"course 3"},{name:"course 4"}]
  responsiveOptions!: any[];

  ngOnInit() {
   

    this.responsiveOptions = [
        {
            breakpoint: '1200px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '950px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '600px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}
}
