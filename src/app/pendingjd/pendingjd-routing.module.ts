import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingjdHomeComponent } from './pendingjd-home/pendingjd-home.component';

const routes: Routes = [
  {path: '', component: PendingjdHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingjdRoutingModule { }
