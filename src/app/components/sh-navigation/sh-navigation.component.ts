import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'sh-navigation-component',
  templateUrl: './sh-navigation.component.html',
  styleUrls: ['./sh-navigation.component.scss']
})
export class ShNavigationComponent {

  DarkMode:boolean = false;
  MenuToggled:boolean = false;

  toggleMenu = () => {
    this.MenuToggled = !this.MenuToggled;
  }

  toggleDarkMode = () => {
    this.DarkMode = !this.DarkMode;
  }
}
