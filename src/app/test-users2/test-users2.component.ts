import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Users, UsersResponse } from '../model/Users.model';
import { TableColumnMapping } from '../sharedEnum';
import { TestUsers2Service } from './test-users2.service';

@Component({
  selector: 'app-test-users2',
  templateUrl: './test-users2.component.html',
  styleUrls: ['./test-users2.component.scss'],
  providers:[TestUsers2Service,DecimalPipe]
})
export class TestUsers2Component implements OnInit {
  columnList:any[]=[];
  childList:any[]=[];
  gridData:Users[]=[];
  total!:number;
  display="Users";
  constructor(private service:HttpService,private layoutService:TestUsers2Service) {
      }
  
   ngOnInit(): void {
    this.loadGrid();
     const data=[
      {
        status:'',
        first_name:'',
        contact_number:'',
        email:'',
        user_type:'',
        action:''
      }
     ];
     const childData=[
      {
        contact_number:'',
        email:'',
        user_type:''
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

  loadGrid(){
    // this.layoutService.users();
    this.service
    .get<UsersResponse>('users')
    .subscribe({
      next: (res) => {
        this.gridData = res.result;
        this.total=res.result.length;
        console.log('Get Data', this.gridData);
        console.log(res.result.length);
        this.layoutService.initWalletTable();
      },
      error: (err) => {
        console.log(err.message);
        alert('Error');
      },
    });
} catch (e: any) {
  console.log(e);
}
}