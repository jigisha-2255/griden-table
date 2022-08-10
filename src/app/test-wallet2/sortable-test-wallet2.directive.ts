import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Wallet } from '../model/Wallet.model';



export type SortTableColumn = keyof Wallet | '';
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
  selector: 'th[walletSortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableTableTestWallet2 {
  @Input() walletSortable: SortTableColumn = '';
  @Input() direction: SortTableDirection = '';
  @Output() sort = new EventEmitter<SortTableEvent>();
 
  // @Input() Data:any;

  rotate(): void {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.walletSortable, direction: this.direction });
  }
}
