import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCardsComponent } from './shared/components/admin-cards/admin-cards.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { AuthgardGuard } from './shared/guards/authgard.guard';
import { UserguardGuard } from './shared/guards/userguard.guard';

const routes: Routes = [
  {path : '', redirectTo: "dashboard" , pathMatch:'full'},
  {path : 'dashboard', component: DashboardComponent, },
  {path : 'cart', component:CartComponent },
  {path : 'admincard',canActivate: [AuthgardGuard], component:AdminCardsComponent },
  {path : 'login',component:LoginComponent},
  {path : 'productform',component:ProductFormComponent},
  {path : 'productform/:id',component:ProductFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
