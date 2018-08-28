import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const app_routes: Routes = [
  { path: 'register', component: RegisterComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
