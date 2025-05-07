import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTextComponent } from './header-text/header-text.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderTextComponent,
  ],
  exports:[
    HeaderTextComponent,
  ]
})
export class WidgetsModule { }
