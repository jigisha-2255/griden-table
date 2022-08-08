import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { UsersResponse } from '../model/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private service:HttpService){

  }
  gridData!: Object;
  total!:number;
  ColData=[
    {field:'id',header:'id'},
    {field:'first_name',header:'Users'},
    {field:'email',header:'Email'},
    {field:'user_type',header:'User Type'},
    {field:'',header:'Action'}
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