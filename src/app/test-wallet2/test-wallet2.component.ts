import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Shared, SharedResponse } from '../model/shared.model';
import { Wallet, WalletResponse } from '../model/Wallet.model';
import { TableColumnMapping } from '../sharedEnum';
import { TestTableLayoutService } from '../test-table-layout/test-table-layout.service';

@Component({
  selector: 'app-test-wallet2',
  templateUrl: './test-wallet2.component.html',
  styleUrls: ['./test-wallet2.component.scss'],
  providers: [TestTableLayoutService, DecimalPipe],
})
export class TestWallet2Component implements OnInit {
  columnList: any[] = [];
  columnListMob:any[]=[];
  childList:any[]=[];
  childListMob:any[]=[];
  gridData: Shared[] = [];
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
      {
        checked: '',
        status: '',
        first_name: '',
      }
    ];
    const childData=[
      {
      },
      {
        wallet_id: '',
        type: '',
        amount: '',
        updated_balance: '',
        debit_or_credit: '',
        transaction_datetime: '',
      }
    ];

    const propertyList = {
      desktop:Object.keys(data[0]),
      mobile:Object.keys(data[1])
    }
    const childList={
      desktop:Object.keys(childData[0]),
      mobile:Object.keys(childData[1])
    }
    // const propertyList=Object.keys(data[0]);
    // const childList = Object.keys(childData[0])

    propertyList.desktop.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.columnList.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
    propertyList.mobile.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.columnListMob.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
    childList.desktop.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.childList.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
    childList.mobile.forEach((element: string) => {
      if (element in TableColumnMapping) {
        this.childListMob.push({
          field: element,
          title: TableColumnMapping[element as keyof typeof TableColumnMapping],
          width: '20%',
        });
      }
    });
  }

  loadGrid() {
    let url='wallet/transaction';
    this.layoutService.getData(url);
    // this.service.get<SharedResponse>('wallet/transaction').subscribe({
    //   next: (res) => {
    //     this.gridData = res.result;
    //     this.total = res.result.length;
    //     console.log('Get Data', this.gridData);
    //     console.log(res.result.length);
    //     this.layoutService.initWalletTable();
    //   },
    //   error: (err) => {
    //     console.log(err.message);
    //     alert('Error');
    //   },
    // });
  }
}
