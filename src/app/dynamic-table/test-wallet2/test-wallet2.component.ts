import { Component, OnInit } from '@angular/core';
import { TableProperty } from 'src/app/model/tableProperty.model';
import { TableColumnMapping } from 'src/app/sharedEnum';
import { HttpService } from '../../http.service';
import { Shared, SharedResponse } from '../../model/shared.model';
import { TestTableLayoutService } from '../test-table-layout/test-table-layout.service';

@Component({
  selector: 'app-test-wallet2',
  templateUrl: './test-wallet2.component.html',
  styleUrls: ['./test-wallet2.component.scss'],
})
export class TestWallet2Component implements OnInit {
  columnList: TableProperty[] = [];
  columnListMob:TableProperty[]=[];
  childList:TableProperty[]=[];
  childListMob:TableProperty[]=[];
  gridData: Shared[] = [];
  total: number=0;
  display = 'Transaction';

  constructor(
    private service: HttpService,
    private layoutService: TestTableLayoutService
  ) {}

  ngOnInit(): void {
    this.loadGrid();
    const data = [
      {
        expand:true,
        checked: '',
        status: '',
        first_name:'',
        user:{
          first_name:''
        },
        wallet_id: '',
        type: '',
        amount: '',
        updated_balance: '',
        debit_or_credit: '',
        transaction_datetime: '',
        transaction_status: '',
      },
      {
        expand:true,
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
  icons=[
    {
      title:'Edit',
      icon: 'mdi mdi-eye',
      routerLink:''
    },
    {
      title:'Delete',
      icon:'mdi mdi-file-pdf',
      routerLink:''
    }
  ]
  
  loadGrid() {
    this.service.get<SharedResponse>('wallet/transaction').subscribe({
      next: (res) => {
        this.gridData = res.result;
        this.total = res.result.length;
        console.log('Get Data', this.gridData);
        console.log(res.result.length);
        this.layoutService.initWalletTable(this.gridData);
      },
      error: (err) => {
        console.log(err.message);
        alert('Error');
      },
    });
  }
}
