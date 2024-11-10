import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const unauthorizeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    // Redirect logged-in users to the home page or another route
    router.navigate(['/']);
    return false;
  }

  return true;
};
