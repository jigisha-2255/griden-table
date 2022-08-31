import { Component, OnInit } from '@angular/core';
import { Shared, SharedResponse } from 'src/app/model/shared.model';
import { TableProperty } from 'src/app/model/tableProperty.model';
import { TableColumnMapping } from 'src/app/sharedEnum';
import { HttpService } from '../../http.service';
import { TestTableLayoutService } from '../test-table-layout/test-table-layout.service';

@Component({
  selector: 'app-test-users2',
  templateUrl: './test-users2.component.html',
  styleUrls: ['./test-users2.component.scss'],
})
export class TestUsers2Component implements OnInit {
  columnList: TableProperty[] = [];
  columnListMob:TableProperty[]=[];
  childList:TableProperty[] = [];
  childListMob:TableProperty[]=[];
  gridData: Shared[] = [];
  total: number=0;
  display = 'Users';
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
        contact_number: '',
        email: '',
        user_type: '',
        action: this.icons,
      },
      {
        expand:true,
        checked: '',
        status:'',
        first_name:'',
      }
    ];
    const childData = [
      {
      },
      {
        contact_number: '',
        email: '',
        user_type: '',
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
      icon: 'mdi mdi-square-edit-outline',
      routerLink:''
    },
    {
      title:'Delete',
      icon:'mdi mdi-delete',
      routerLink:''
    }
  ]

  loadGrid() {
    // let url='users';
    // this.layoutService.getData(url);
    this.service.get<SharedResponse>('users').subscribe({
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
