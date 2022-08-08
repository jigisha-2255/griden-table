import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbdSortableTableLayout, SortTableEvent } from './sortable-table-layout.directive';
import { TableLayoutService } from './table-layout.service';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss'],
  providers:[TableLayoutService,DecimalPipe]
})
export class TableLayoutComponent implements OnInit {
  @Input() GridData:any;
  @Input() ColData:any;
  @Input()
  total!: number;
  active = 1;
  pages: any = [5, 10, 20, 50, 100,200];
  checked: boolean = false;
  public isCollapsed: boolean[] = [];
 
  @ViewChildren(NgbdSortableTableLayout)
  headers!: QueryList<NgbdSortableTableLayout>;

  constructor(public TableLayoutService:TableLayoutService) {
  }

  ngOnInit(): void {
  }

  onSort({ column , direction }: SortTableEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.TableLayoutService.SortTableColumn = column;
    this.TableLayoutService.SortTableDirection = direction;
  }

  // Select-Deselect All Checkbox
  selectedAll = false;
  selectAll() {
    for (var i = 0; i < this.GridData.length; i++) {
      this.GridData[i].checked = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.GridData.every(function (item: { checked: boolean; }) {
      return item.checked == true;
    });
  }
  // End Select-Deselect Checkbox
}


