import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../model/Wallet.model';
import { NgbdSortableTableTestWallet2, SortTableEvent } from '../test-wallet2/sortable-test-wallet2.directive';
import { TestTableLayoutService } from '../test-wallet2/test-table-layout.service';

@Component({
  selector: 'app-test-table-layout',
  templateUrl: './test-table-layout.component.html',
  styleUrls: ['./test-table-layout.component.scss'],
  providers:[TestTableLayoutService,DecimalPipe]
})
export class TestTableLayoutComponent implements OnInit {
  @Input() columnList:any;
  @Input() childList:any;
  @Input() gridData:any;
  @Input() display!:string;
  data$: Observable<Wallet[]>;
  total$: Observable<number>;
  active = 1;
  pages: any = [5, 10, 20, 50, 100,200];
  checked: boolean = false;
  public isCollapsed: boolean[] = [];
  @ViewChildren(NgbdSortableTableTestWallet2)
  headers!: QueryList<NgbdSortableTableTestWallet2>;

  constructor(public TestTableLayoutService:TestTableLayoutService) {
    this.data$ = TestTableLayoutService.data$;
    this.total$ = TestTableLayoutService.total$;
  }

  ngOnInit(): void {
      
  }
  onSort({ column , direction }: SortTableEvent) {
    console.log('onsort called');
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.walletSortable !== column) {
        header.direction = '';
      }
    });

    this.TestTableLayoutService.SortTableColumn = column;
    this.TestTableLayoutService.SortTableDirection = direction;
  }

  // Select-Deselect All Checkbox
  selectedAll = false;
  selectAll() {
    for (var i = 0; i < this.gridData.length; i++) {
      this.gridData[i].checked = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.gridData.every(function (item: { checked: boolean; }) {
      return item.checked == true;
    });
  }
  // End Select-Deselect Checkbox
}

