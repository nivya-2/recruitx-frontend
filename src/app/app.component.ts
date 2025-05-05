import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JrrowComponent } from './jrrow/jrrow.component';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JrrowComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jobs = [
    {
      title: 'Data Scientist- Computer Vision',
      date: 'April 2, 2025',
      location: 'Kochi',
      openings: 6
    },
    {
      title: 'Data Scientist- Computer Vision',
      date: 'April 2, 2025',
      location: 'Kochi',
      openings: 6
    }
    // ... more jobs
  ];
  
}
