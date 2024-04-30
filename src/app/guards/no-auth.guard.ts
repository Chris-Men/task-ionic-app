import { UtilsService } from '../services/utils.service';
import { FirebaseService } from './../services/firebase.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private FirebaseSvc: FirebaseService, // Corregido aquí
    private UtilsSvc: UtilsService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.FirebaseSvc.getAuthState().pipe(map(auth => {
      // No existe usuario autenticado
      if (!auth) {
        return true;
      } else {
        // Existe usuario autenticado
        this.UtilsSvc.routerLink('/tabs/home');
        return false;
      }
    }));
  }
}
