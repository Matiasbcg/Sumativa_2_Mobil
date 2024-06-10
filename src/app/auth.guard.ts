import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DBTaskService } from './services/dbtask.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: DBTaskService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.authService.isUserAuthenticated().then(isAuthenticated => {
      if (isAuthenticated) {
        return true; 
      } else {
        this.router.navigate(['/login']); 
        return false; 
      }
    }).catch(() => {
      this.router.navigate(['/login']); 
      return false; 
    });
  }
}


