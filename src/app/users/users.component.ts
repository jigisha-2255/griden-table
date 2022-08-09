import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Users, UsersResponse } from '../model/Users.model';
import { TableLayoutService } from '../table-layout/table-layout.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[TableLayoutService,DecimalPipe]
})
export class UsersComponent implements OnInit {
  constructor(private layoutService:TableLayoutService,private service:HttpService){

  }
  data:Users[]=[];
  gridData:Users[]=[];
  total!:number;
  ColData=[
    // {field:'id',header:'id'},
    {field:'status',header:'',width:'2%'},
    {field:'first_name',header:'Users',width:'15%'},
    {field:'email',header:'Email',width:'15%'},
    {field:'user_type',header:'User Type',width:'15%'},
  ]
  childData=[
    {field:'email',header:'Email'},
    {field:'user_type',header:'User Type'},
  ]
  button=[
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

  ngOnInit(){
    this.loadGrid();
  }
  loadGrid(){
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