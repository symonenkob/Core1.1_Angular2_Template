import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { MachinesComponent } from './components/machines.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent, data: { title: 'Home' } },
    { path: 'machines', component: MachinesComponent, data: { title: 'Machines' } }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [IndexComponent, MachinesComponent];