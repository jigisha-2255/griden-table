import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Shared } from '../model/shared.model';
import { NgbdSortableTestTableLayout, SortTestTableEvent } from './sortable-test-table-layout.directive';
import { TestTableLayoutService } from './test-table-layout.service';

@Component({
  selector: 'app-test-table-layout',
  templateUrl: './test-table-layout.component.html',
  styleUrls: ['./test-table-layout.component.scss'],
  providers:[TestTableLayoutService,DecimalPipe]
})
export class TestTableLayoutComponent implements OnInit {
  @Input() columnList:any;
  @Input() columnListMob:any;
  @Input() childList:any;
  @Input() childListMob:any;
  @Input() gridData:any;
  @Input() display!:string;
  gridData2$:Observable<Shared[]>;
  data$: Observable<Shared[]>;
  total$: Observable<number>;
  active = 1;
  pages: any = [5, 10, 20, 50, 100,200];
  checked: boolean = false;
  public isCollapsed: boolean[] = [];
  @ViewChildren(NgbdSortableTestTableLayout)
  headers!: QueryList<NgbdSortableTestTableLayout>;

  constructor(public TestTableLayoutService:TestTableLayoutService) {
    this.gridData2$ = TestTableLayoutService.gridData2$;
    this.data$ = TestTableLayoutService.data$;
    this.total$ = TestTableLayoutService.total$;
  }

  ngOnInit(): void {
    // this.getResponse();
  }

  getResponse(){
    // this.TestTableLayoutService.Wallet();
  }

  onSort({ column , direction }: SortTestTableEvent) {
    console.log('onsort called');
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortTestTable !== column) {
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

