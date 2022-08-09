import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  columnList:any[]=[];
  constructor() {
   
   }
  
   ngOnInit(): void {
    enum TableColumnMapping{
      first_name="User",
      user_type="User Type"
    }
     const data=[
      {
        firstName:"Jigisha",
        user_type:'A'
      },
      {
        firstName:"Sachin",
        user_type:"B",
        isChecked:true
      }
     ]
     let propertyList=Object.keys(data[0])
     
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
