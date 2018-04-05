import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticateComponent} from './authenticate/authenticate.component';

const routes: Routes = [
  { path: 'auth', component: AuthenticateComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule { }
