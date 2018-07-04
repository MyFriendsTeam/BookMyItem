import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { RoutingUrls} from './helpers/routingUrls'

const routes: Routes = [
  { path: RoutingUrls.Login, component: AuthenticateComponent },
  { path: RoutingUrls.Register, component: RegistrationComponent },
  { path: RoutingUrls.Dashboard, component: DashboardComponent },
  { path: RoutingUrls.Products, component: ProductsComponent },
  { path: RoutingUrls.Default, component: ProductsComponent }, // HomePageComponent
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule { }
