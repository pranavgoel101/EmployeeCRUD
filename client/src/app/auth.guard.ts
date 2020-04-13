import { UserauthService } from './userauth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userauthservice: UserauthService,
    private router: Router
  ){}
    canActivate(): boolean {
      if (this.userauthservice.loggedIn()){
        return true;
      } else {
        this.router.navigate(['/login'])
        return false;
      }
    }

}
