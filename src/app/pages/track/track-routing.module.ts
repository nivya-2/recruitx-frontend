import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackHomeComponent } from './track-home/track-home.component';

const routes: Routes = [
  {
    path: '',
    component: TrackHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pendingjdgeneration'
      },
      {
        path: 'pendingjdgeneration',
        loadChildren: () =>
          import('../../pendingjd/pendingjd.module').then(m => m.PendingjdModule)
      },
      {
        path: 'openjd',
        loadChildren: () =>
          import('../../openjd/openjd.module').then(m => m.OpenjdModule)
      },
      {
        path: 'closedjd',
        loadChildren: () =>
          import('../../closedjd/closedjd.module').then(m => m.ClosedjdModule)
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule { }
