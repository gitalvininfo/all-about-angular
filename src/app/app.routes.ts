import { Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { authGuardGuard } from './auth-guard.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { unauthorizeGuard } from './unauthorize.guard';

export const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent, canActivate: [authGuardGuard], },
  { path: 'unauthorized', component: UnauthorizedComponent, canActivate: [unauthorizeGuard] },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
];
