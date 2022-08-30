import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// import { WalletResponse } from '../model/Wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  constructor(private service:HttpService){
    // this.data$ = TableLayoutService.data$;
    // this.total$ = TableLayoutService.total$;
  }
  gridData!: Object;
  total!: number;
  ColData=[
    // {field:'id',header:'id'},
    {field:'status',header:'',width:'2%'},
    {field:'user.first_name',header:'Users',width:'20%'},
    {field:'wallet_id',header:'Wallet ID',width:'15%'},
    {field:'type',header:'Transaction Type',width:'15%'},
    {field:'amount',header:'Amount',width:'10%'},
    {field:'updated_balance',header:'Balance',width:'10%'},
    {field:'debit_or_credit',header:'Debit/Credit',width:'10%'},
    {field:'transaction_datetime',header:'Transaction Date',width:'20%'},
    {field:'transaction_status',header:'Status',width:'15%'},
  ]
  childData=[
    {field:'wallet_id',header:'Wallet ID'},
    {field:'type',header:'Transaction Type'},
    {field:'amount',header:'Amount'},
    {field:'updated_balance',header:'Balance'},
    {field:'debit_or_credit',header:'Debit/Credit'},
    {field:'transaction_datetime',header:'Transaction Date'},
    // {field:'',header:'Action'}
  ]
  action=[
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
  ngOnInit(){
    this.loadGrid();
    console.log(this.total);
  }

  loadGrid() {
    try {
      // this.service
      //   .get<WalletResponse>('wallet/transaction')
      //   .subscribe({
      //     next: (res) => {
      //       this.gridData = res.result;
      //       this.total=res.result.length;
      //       console.log(this.total);
      //       console.log('Get Data', this.gridData);
      //     },
      //     error: (err) => {
      //       console.log(err.message);
      //       alert('Error');
      //     },
      //   });
    } catch (e) {
      console.log(e);
    }
  }
}