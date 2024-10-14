import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (_route) => {
  return true;
};
