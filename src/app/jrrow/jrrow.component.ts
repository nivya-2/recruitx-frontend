import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-jrrow',
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './jrrow.component.html',
  styleUrl: './jrrow.component.css'
})
export class JrrowComponent {
  @Input() title='';
  @Input() date='';
  @Input() location='';
  @Input() openings=0;

}
