import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'sh-calendar',
  templateUrl: './sh-calendar.component.html',
  styleUrls: ['./sh-calendar.component.scss']
})
export class ShCalendarComponent implements OnInit{

  events!: any[];

  options: any;

  header: any;
  
  calendarOptions:any;

  constructor() { }

  ngOnInit() {
     
          this.events = [
            {
                  "id": 1,
              "title": "All Day Event",
              "start": new Date()
            },
            {
                  "id": 2,
              "title": "Long Event",
              "start": "2019-01-07",
              "end": "2023-02-10"
            },
            {
              "id": 3,
              "title": "Repeating Event",
              "start": "2023-02-12T16:00:00"
            },
            {
              "id": 4,
              "title": "Repeating Event",
              "start": "2023-02-16T16:00:00"
            },
            {
                  "id": 5,
              "title": "Conference",
              "start": "2023-04-28",
              "end": "2023-04-29"
            },
            {
                  "id": 6,
              "title": "Meeting",
              "start": "2023-04-12T10:30:00",
              "end": "2023-04-13T12:30:00"
            },
            {
                  "id": 7,
              "title": "Lunch",
              "start": "2023-02-12T12:00:00"
            },
            {
                  "id": 8,
              "title": "Meeting",
              "start": "2023-04-12T14:30:00"
            },
            {
                  "id": 9,
              "title": "Happy Hour",
              "start": "2023-04-15T17:30:00"
            },
            {
                  "id": 10,
              "title": "Dinner",
              "start": "2023-04-21T20:00:00"
            },
            {
                  "id": 11,
              "title": "Birthday Party",
              "start": "2023-04-17T07:00:00"
            },
            {
                  "id": 12,
              "title": "Click for Google",
              "url": "http://google.com/",
              "start": "2023-04-28"
            }
          ];

          this.options = {...this.options, ...{events: this.events}};
      



     this. calendarOptions = {
      initialDate : new Date(),
      plugins: [dayGridPlugin,timeGridPlugin],
      dateClick: this.handleDateClick.bind(this),
       headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        selectable:true,
        selectMirror: true,
        dayMaxEvents: true,
      events: this.events
    };
  
   


  }

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

}
