import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenjdHomeComponent } from './openjd-home/openjd-home.component';

const routes: Routes = [
  {path: '', component: OpenjdHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenjdRoutingModule { }
