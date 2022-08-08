import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { WalletResponse } from '../model/Wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  constructor(private service:HttpService){

  }
  gridData!: Object;
  total!: number;
  ColData=[
    {field:'id',header:'id'},
    {field:'user.first_name',header:'Users'},
    {field:'wallet_id',header:'Wallet ID'},
    {field:'type',header:'Transaction Type'},
    {field:'amount',header:'Amount'},
    {field:'updated_balance',header:'Balance'},
    {field:'debit_or_credit',header:'Debit/Credit'},
    {field:'transaction_datetime',header:'Transaction Date'},
    {field:'status',header:'Status'},
  ]

  ngOnInit(){
    this.loadGrid();
    console.log(this.total);
  }
  loadGrid() {
    try {
      this.service
        .get<WalletResponse>('wallet/transaction')
        .subscribe({
          next: (res) => {
            this.gridData = res.result;
            this.total=res.result.length;
            console.log(this.total);
            console.log('Get Data', this.gridData);
          },
          error: (err) => {
            console.log(err.message);
            alert('Error');
          },
        });
    } catch (e) {
      console.log(e);
    }
  }
}