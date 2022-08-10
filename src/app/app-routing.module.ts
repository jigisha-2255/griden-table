import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestUsers2Component } from './test-users2/test-users2.component';
import { TestWallet2Component } from './test-wallet2/test-wallet2.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent,
  },
  {
    path:'wallet',
    component:WalletComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'test-wallet2',
    component:TestWallet2Component
  },
  {
    path:'test-users2',
    component:TestUsers2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
