import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedjdHomeComponent } from './closedjd-home/closedjd-home.component';

const routes: Routes = [
  {path: '', component: ClosedjdHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosedjdRoutingModule { }
