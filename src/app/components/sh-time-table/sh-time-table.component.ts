import { Component } from '@angular/core';


@Component({
  selector: 'sh-time-table',
  templateUrl: './sh-time-table.component.html',
  styleUrls: ['./sh-time-table.component.scss']
})
export class ShTimeTableComponent {


  courses=[{
    date:"29-03-2023",
    session:[{hour:"21:00:00",lesson:"Lesson 4", title:"Machine Learning", duree:"02:43:00"},{hour:"11:00:00",lesson:"Lesson 2", title:"Mathematics", duree:"1:30:00"}]
  },{
    date:"15-03-2023",
    session:[{hour:"09:00:00",lesson:"Lesson 4", title:"Machine Learning", duree:"00:50:00"},{hour:"11:00:00",lesson:"Lesson 2", title:"Mathematics", duree:"1:30:00"}]
  }]

  constructor(){}

  currentDateTime = new Date();


  CheckIfSessionIsOpen(pdate:any,phour:any,pduree:any){

    const ldate=this.ReturnDate(pdate);
  
    if(ldate.getFullYear()==this.currentDateTime.getFullYear() && ldate.getMonth()==this.currentDateTime.getMonth()&&ldate.getDay()==this.currentDateTime.getDay()){
      
      //check is currrent hour [phour,pduree+phour]

      const currentHourTomin=this.AddTwoTime(this.currentDateTime.getHours()+":"+this.currentDateTime.getMinutes(),"00:00:00");
      const hourCourseStarted=this.AddTwoTime(phour,"00:00:00");
      const hourCourseFinished=this.AddTwoTime(phour,pduree);
      

      if(currentHourTomin<=hourCourseFinished && currentHourTomin>=hourCourseStarted){
        return true;
      }

    }
 
    return false;
  }


  AddTwoTime(ptimeFirst:any,ptimeSecond:any){
    const llistFirst=ptimeFirst.split(":") ;
    const llistSecond=ptimeSecond.split(":");
    let minFirst;
    let minSecond;

    if(llistFirst.length>1){
      minFirst=Number(llistFirst[0])*60+Number(llistFirst[1]);
    }
    else{
      minFirst=Number(llistFirst[0]);
    }

    if(llistSecond.length>1){
      minSecond=Number(llistSecond[0])*60+Number(llistSecond[1]);
    }
    else{
      minSecond=Number(llistSecond[0]);
    }
  
    const minTotal=minFirst+minSecond;

    return minTotal;


  }



  ReturnDate(pdate:any){

    const lListDate=pdate.split("-");

    const lday = lListDate[0]; 
    const lmonth = lListDate[1]; 
    const lyear = lListDate[2]; 


    const ldate = new Date(lyear,lmonth-1,lday);

    return ldate;
  }


   toTime(timeString:any){
    let timeTokens = timeString.split(':');
    return new Date(1970,0,1, timeTokens[0], timeTokens[1], timeTokens[2]);
}


ConvertDuree(timeString:any){
  let timeList = timeString.split(':');
  const totalmin = Number(timeList[0]*60)+Number(timeList[1]);
  const hour = Math.floor(totalmin / 60);
  const min = totalmin%60;

  let duree;

  if(hour!=0&&min!=0){
    duree=hour+'h'+min+'min';
  }
  else if(min==0){
    duree=hour+'h';
  }
  else{
    duree=min+'min'
  }

  return duree
}



  


}
