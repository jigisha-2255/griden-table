import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { Shared } from "../model/shared.model";

export type SortTableColumn = keyof Shared | '';
export type SortTableDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortTableDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export interface SortTestTableEvent {
  column: SortTableColumn;
  direction: SortTableDirection;
}

@Directive({
  selector: 'th[sortTestTable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableTestTableLayout {
  @Input() sortTestTable: SortTableColumn = '';
  @Input() direction: SortTableDirection = '';
  @Output() sort = new EventEmitter<SortTestTableEvent>();
 
  // @Input() Data:any;

  rotate(): void {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortTestTable, direction: this.direction });
  }
}
