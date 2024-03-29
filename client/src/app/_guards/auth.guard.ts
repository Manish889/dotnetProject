import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService){}
  canActivate(): Observable<any> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) return; 
        this.toastr.error("You shall now enter!")
      })
    )
  }
  
}
