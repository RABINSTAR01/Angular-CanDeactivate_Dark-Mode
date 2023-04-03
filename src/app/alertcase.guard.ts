import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AlertcaseGuard implements CanDeactivate<AlertComponent> {
  canDeactivate(
    component: AlertComponent){
      if(component.islog)
      {
        return window.confirm("are you sure");
      }

    return true;
  }
  
}
