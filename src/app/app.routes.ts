import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pendingjdgeneration', loadChildren: () =>
            import('./pendingjd/pendingjd.module').then((m) => m.PendingjdModule)
    },
    {
        path: 'openjd', loadChildren: () =>
            import('./openjd/openjd.module').then((m) => m.OpenjdModule)
    },
    {
        path: 'closedjd', loadChildren: () =>
            import('./closedjd/closedjd.module').then((m) => m.ClosedjdModule)
    },
    {
        path: '', loadChildren: () =>
            import('./pendingjd/pendingjd.module').then((m) => m.PendingjdModule)
    }

];
