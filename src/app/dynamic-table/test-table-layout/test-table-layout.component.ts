import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Shared } from 'src/app/model/shared.model';
import { icons, SortTestTableEvent, TableProperty } from 'src/app/model/tableProperty.model';
import { NgbdSortableTestTableLayout } from './sortable-test-table-layout.directive';
import { TestTableLayoutService } from './test-table-layout.service';

@Component({
  selector: 'app-test-table-layout',
  templateUrl: './test-table-layout.component.html',
  styleUrls: ['./test-table-layout.component.scss'],
})
export class TestTableLayoutComponent implements OnInit {
  @Input()
  columnList!: TableProperty[];
  @Input()
  columnListMob!: TableProperty[];
  @Input()
  childList!: TableProperty[];
  @Input()
  childListMob!: TableProperty[];
  @Input() display!:string;
  @Input() icons!:icons[];
  gridData2$:Observable<Shared[]>;
  data$: Observable<Shared[]>;
  total$: Observable<number>;
  active = 1;
  tableData : any[] = [];
  pages = [5, 10, 20, 50, 100,200];
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
    this.TestTableLayoutService.gridData2$.subscribe((tableData) => {
      // this.tableData  = tableData.map(record => ({...record, ...record.user}));
      this.tableData  = tableData.map(record => ({...record}));
    });
  }

  onSort({ column , direction }: SortTestTableEvent) {
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
    for (var i = 0; i < this.tableData.length; i++) {
      this.tableData[i].checked = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.tableData.every(function (item: { checked: boolean; }) {
      return item.checked == true;
    });
  }
  // End Select-Deselect Checkbox
}

