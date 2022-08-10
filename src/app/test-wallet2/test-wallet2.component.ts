import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Wallet, WalletResponse } from '../model/Wallet.model';
import { TableColumnMapping } from '../sharedEnum';
import { TestTableLayoutService } from './test-table-layout.service';

@Component({
  selector: 'app-test-wallet2',
  templateUrl: './test-wallet2.component.html',
  styleUrls: ['./test-wallet2.component.scss'],
  providers: [TestTableLayoutService, DecimalPipe],
})
export class TestWallet2Component implements OnInit {
  columnList: any[] = [];
  childList:any[]=[];
  gridData: Wallet[] = [];
  total!: number;
  display = 'Transaction';

  constructor(
    private service: HttpService,
    private layoutService: TestTableLayoutService
  ) {}

  ngOnInit(): void {
    this.loadGrid();
    const data = [
      {
        checked: '',
        status: '',
        first_name: '',
        wallet_id: '',
        type: '',
        amount: '',
        updated_balance: '',
        debit_or_credit: '',
        transaction_datetime: '',
        transaction_status: '',
      },
    ];
    const childData=[
      {
        wallet_id: '',
        type: '',
        amount: '',
        updated_balance: '',
        debit_or_credit: '',
        transaction_datetime: '',
      }
    ];

    const propertyList = Object.keys(data[0]);
    const childList = Object.keys(childData[0])

    propertyList.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.columnList.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
    childList.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.childList.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
  }

  loadGrid() {
    // this.layoutService.wallet();
    this.service.get<WalletResponse>('wallet/transaction').subscribe({
      next: (res) => {
        this.gridData = res.result;
        this.total = res.result.length;
        console.log('Get Data', this.gridData);
        console.log(res.result.length);
        this.layoutService.initWalletTable();
      },
      error: (err) => {
        console.log(err.message);
        alert('Error');
      },
    });
  }
}
