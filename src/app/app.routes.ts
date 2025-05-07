import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'pendingjdgeneration', loadChildren: () =>
    //         import('./pendingjd/pendingjd.module').then((m) => m.PendingjdModule)
    // },
    // {
    //     path: 'openjd', loadChildren: () =>
    //         import('./openjd/openjd.module').then((m) => m.OpenjdModule)
    // },
    // {
    //     path: 'closedjd', loadChildren: () =>
    //         import('./closedjd/closedjd.module').then((m) => m.ClosedjdModule)
    // },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
    {
        path: 'track', loadChildren: () =>
            import('./pages/track/track.module').then((m) => m.TrackModule)
    },
    {
        path: 'schedule', loadChildren: () =>
            import('./pages/schedule/schedule.module').then((m) => m.ScheduleModule)
    },
    {
        path: 'dashboard', loadChildren: () =>
            import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
    }

];
