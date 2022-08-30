import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableColumnMapping } from '../sharedEnum';
import { TableLayoutService } from '../table-layout/table-layout.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers:[TableLayoutService,DecimalPipe]
})
export class TestComponent implements OnInit {
  columnList:any[]=[];
  constructor() {
   }
  
   ngOnInit(): void {
     const data=[
      {
        first_name:"Piyu",
        user_type:'A'
      },
      {
        first_name:"Aarav",
        user_type:"B",
        contact_number:34239943294
      }
     ]

     const propertyList=Object.keys(data[0])
     
     console.log(propertyList);
     
     propertyList.forEach((element:string)=>{
      if(element in TableColumnMapping){
      this.columnList.push({
        field:element,
        title:TableColumnMapping[element as keyof typeof TableColumnMapping],
        width:'20%'
        
      });
      console.log(true)
    }
    else{
      console.log(false);
    }
     })
  }
}
