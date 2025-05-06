import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icons',
  imports: [CommonModule, MatIconModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconComponent {
  @Input() name: string = '';                     
  @Input() size: string = '';                     
  @Input() customColor: string = ''; 

  /**
for proper icon scaling fetch user input value as numeric 
and scale from center using width,height anf fontsize as square
   */
  getIconStyles() {
    const sizeValue = this.size.replace('px', '');
    const numericSize = parseInt(sizeValue) || 24;
    return {
      'font-size': this.size,
      'width': this.size,
      'height': this.size,
      'color': this.customColor || null,
      'transform': `scale(${numericSize / 24})`,
      'transform-origin': 'center'
    };
  }
}