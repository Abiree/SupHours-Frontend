import { Component } from '@angular/core';

@Component({
  selector: 'sh-progress',
  templateUrl: './sh-progress.component.html',
  styleUrls: ['./sh-progress.component.scss']
})
export class ShProgressComponent {

  progressCourse=[{totalDoc:11,uploydedDoc:7,name:"Machine Learning"},{totalDoc:20,uploydedDoc:10,name:"Javascript"},{totalDoc:10,uploydedDoc:10,name:"Javascript"}]


  calcul(puployedDoc:number,ptotalDoc:number){

    const per=(puployedDoc/ptotalDoc)*100;

    return per;

  }

}
