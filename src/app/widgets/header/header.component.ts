import { Component, Input, OnInit } from '@angular/core';
import { ProfileBoxComponent } from '../profile-box/profile-box.component';
import { HeaderTextComponent } from '../header-text/header-text.component';
import { IconComponent } from '../../icons/icons.component';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [ProfileBoxComponent,HeaderTextComponent,IconComponent,SearchbarComponent,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  @Input() search = true;
  constructor(){}
  ngOnInit() { }

}
