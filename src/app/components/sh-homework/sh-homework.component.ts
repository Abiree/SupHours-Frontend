import { Component } from '@angular/core';

@Component({
  selector: 'sh-homework',
  templateUrl: './sh-homework.component.html',
  styleUrls: ['./sh-homework.component.scss']
})
export class ShHomeworkComponent {
  homeworkList=[{courseName:"Machine Learning",homeworkname:"tp3",deadline:"2"},{courseName:"Machine Learning",homeworkname:"tp2",deadline:"0"},{courseName:"Machine Learning",homeworkname:"tp1",deadline:"-2"}]

  deadlineList=["Days to go","Today","Days late"];
  deadlineClass:string="green-color";


  ReturnDeadlineText(pdeadlineNum:any){
    if(pdeadlineNum>0){
      return {text:pdeadlineNum+" "+this.deadlineList[0],class:"green-color"};
      
    }

    else if(pdeadlineNum==0){
      return {text:this.deadlineList[1],class:"yellow-color"};
    }
    else{
      return {text:Number(pdeadlineNum)*(-1)+" "+this.deadlineList[2],class:"red-color"};
    }
  }
}
