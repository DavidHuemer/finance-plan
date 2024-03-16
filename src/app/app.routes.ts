import {Routes} from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['auth/sign-in']);
const redirectLoggedInToMain = () => redirectLoggedInTo(['']);

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToMain)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    ...canActivate(redirectUnauthorizedToAuth)
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];
