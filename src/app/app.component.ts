import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownfilterComponent } from "./shared/dropdownfilter/dropdownfilter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropdownfilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recruitxfrontend';
}
