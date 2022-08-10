import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableTableLayout } from './table-layout/sortable-table-layout.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { UsersComponent } from './users/users.component';
import { WalletComponent } from './wallet/wallet.component';
import { StyleCellDirective } from './table-layout/style-cell.directive';
import { TestComponent } from './test/test.component';
import { TestTableLayoutComponent } from './test-table-layout/test-table-layout.component';
import { TestWallet2Component } from './test-wallet2/test-wallet2.component';
import { NgbdSortableTableTestWallet2 } from './test-wallet2/sortable-test-wallet2.directive';
import { TestUsers2Component } from './test-users2/test-users2.component';


@NgModule({
  declarations: [
    AppComponent,
    TableLayoutComponent,
    NgbdSortableTableLayout,
    NgbdSortableTableTestWallet2,
    UsersComponent,
    WalletComponent,
    StyleCellDirective,
    TestComponent,
    TestTableLayoutComponent,
    TestWallet2Component,
    TestUsers2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
