import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AlertcaseGuard } from './alertcase.guard';



const routes: Routes = [
{
  path:'alert',
  component:AlertComponent,
  canDeactivate:[AlertcaseGuard]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
