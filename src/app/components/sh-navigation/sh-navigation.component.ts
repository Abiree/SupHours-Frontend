import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-navigation-component',
  templateUrl: './sh-navigation.component.html',
  styleUrls: ['./sh-navigation.component.scss']
})
export class ShNavigationComponent{

  @Input() DarkMode:boolean = false;
  @Input() toggleDarkMode: (() => void) = () => {};
  
  MenuToggled:boolean = false;

  toggleMenu = () => {
    this.MenuToggled = !this.MenuToggled;
  }

}
