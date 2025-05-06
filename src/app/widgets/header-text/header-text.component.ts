import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header-text',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.css'],
})
export class HeaderTextComponent {
  @Input() context: 'title' | 'subtitle' | 'heading' | 'profile-text' | 'table-header' = 'title';

  get className(): string {
    return ['title', 'subtitle', 'profile-text', 'table-header'].includes(this.context)
      ? this.context
      : 'title';
  }
}
