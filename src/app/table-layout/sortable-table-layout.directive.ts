import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Users } from '../model/Users.model';

export type SortTableColumn = keyof Users | '';
export type SortTableDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortTableDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export interface SortTableEvent {
  column: SortTableColumn;
  direction: SortTableDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableTableLayout {
  @Input() sortable: SortTableColumn = '';
  @Input() direction: SortTableDirection = '';
  @Output() sort = new EventEmitter<SortTableEvent>();
  // @Input() Data:any;

  rotate(): void {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction });
  }
}
