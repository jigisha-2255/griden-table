import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Wallet } from '../model/Wallet.model';

export type SortColumn = keyof Wallet | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export interface SortWalletEvent {
  walletColumn: SortColumn;
  walletDirection: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableWallet {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sortWallet = new EventEmitter<SortWalletEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sortWallet.emit({walletColumn: this.sortable, walletDirection: this.direction });
  }
}
