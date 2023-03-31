import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SupHours-Frontend'
  isDarkMode: boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('preferred-theme') == 'light' || localStorage.getItem('preferred-theme') == null){
      this.isDarkMode = false;
    }else{
      this.isDarkMode = true;
    }
  }

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    if(this.isDarkMode){
      localStorage.setItem('preferred-theme', 'dark');
    }else{
      localStorage.setItem('preferred-theme', 'light')
    }
  }

  @HostBinding('class.dark-mode')
  get darkMode() {
    return this.isDarkMode;
  }

}
