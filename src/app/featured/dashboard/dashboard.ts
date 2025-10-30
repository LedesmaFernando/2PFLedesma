import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  listItems = [
    {
      name: 'Home',
      icon: 'home',
      url: '/dashboard',
    },
    {
      name: 'Courses',
      icon: 'school',
      url: 'courses',
    },
    {
      name: 'Students',
      icon: 'groups',
      url: 'students',
    },
  ];


}
