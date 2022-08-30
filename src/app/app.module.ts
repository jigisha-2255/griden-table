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
import { TestWallet2Component } from './dynamic-table/test-wallet2/test-wallet2.component';
import { TestUsers2Component } from './dynamic-table/test-users2/test-users2.component';
import { TestTableLayoutService } from './dynamic-table/test-table-layout/test-table-layout.service';
import { NgbdSortableTestTableLayout } from './dynamic-table/test-table-layout/sortable-test-table-layout.directive';
import { TestTableLayoutComponent } from './dynamic-table/test-table-layout/test-table-layout.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableLayoutComponent,
    NgbdSortableTableLayout,
    UsersComponent,
    WalletComponent,
    StyleCellDirective,
    TestComponent,
    TestTableLayoutComponent,
    TestWallet2Component,
    TestUsers2Component,
    NgbdSortableTestTableLayout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},TestTableLayoutService,DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
