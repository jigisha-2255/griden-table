import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
