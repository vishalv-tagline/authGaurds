import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonGuard } from './feature/auth/gaurd/common.guard';
import { Child1Component } from './feature/components/child1/child1.component';
import { Child2Component } from './feature/components/child2/child2.component';
import { HelpPurchaseComponent } from './feature/components/help-purchase/help-purchase.component';
import { HomeComponent } from './feature/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canDeactivate: [CommonGuard],
    component: HomeComponent,
  },
  {
    path: 'productsDetails',
    loadChildren: () => import('src/app/feature/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/feature/admin/admin.module').then(m => m.AdminModule),
    canLoad: [CommonGuard],
  },
  {
    path: 'employee',
    canActivate: [CommonGuard],
    loadChildren: () => import('src/app/feature/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'helps',
    component: HelpPurchaseComponent,
    canActivateChild: [CommonGuard],
    canDeactivate: [CommonGuard],
    children: [
      {
        path: 'child1',
        component: Child1Component
      },
      {
        path: 'child2',
        component: Child2Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
