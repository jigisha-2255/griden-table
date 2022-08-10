import { DecimalPipe } from "@angular/common";
import { Injectable, PipeTransform } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpService } from '../http.service';
import { tap,debounceTime,switchMap,delay } from 'rxjs';
import { SearchResult, State, Wallet, WalletResponse } from "../model/Wallet.model";
import { SortTableColumn, SortTableDirection } from "./sortable-test-wallet2.directive";


const compare = (
  v1: string | number | boolean | object,
  v2: string | number | boolean | object
) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(
  data: Wallet[],
  column: SortTableColumn,
  direction: string
): Wallet[] {
  if (direction === '' || column === '') {
    return data;
  } else {
    return [...data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(data: Wallet , term: string, pipe: PipeTransform) {
  return (
    data.wallet_id.toString().includes(term) ||
    data.amount.toString().includes(term) ||
    data.updated_balance.toString().includes(term) ||
    data.transaction_datetime.toString().includes(term) 
  );
}
@Injectable({
  providedIn: 'root'
})
export class TestTableLayoutService {
  gridData: Array<Wallet> = [];
  // _gridData$ = new BehaviorSubject<Wallet[]>([]);
  _loading$ = new BehaviorSubject<boolean>(true);
  _search$ = new Subject<void>();
  _data$ = new BehaviorSubject<Wallet[]>([]);
  _total$ = new BehaviorSubject<number>(0);

  _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    SortTableColumn: '',
    SortTableDirection: '',
  };

  // Get API integration

  constructor(public httpService: HttpService, public pipe: DecimalPipe) {
    // this.httpService
    //       .get<WalletResponse>('wallet/transaction')
    //       .subscribe({
    //         next: (res) => {
    //           this.gridData = res.result;
    //           console.log('Get Data', this.gridData);
    //           this.initWalletTable();
    //         },
    //         error: (err) => {
    //           console.log(err.message);
    //           alert('Error');
    //         },
    //       });
    // console.log("from service",this.gridData);
    // this.initWalletTable();
  }

  wallet() {
    try {
      this.httpService
        .get<WalletResponse>('wallet/transaction')
        .subscribe({
          next: (res) => {
            this.gridData = res.result;
            console.log('Get Data', this.gridData);
            this.initWalletTable();
          },
          error: (err) => {
            console.log(err.message);
            alert('Error');
          },
        });
    } catch (e) {
      console.log(e);
    }
  }

  initWalletTable(){
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._data$.next(result.data);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  // get gridData$() {
  //   return this._gridData$.asObservable();
  // }
  get data$() {
    return this._data$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set SortTableColumn(SortTableColumn: SortTableColumn) {
    this._set({ SortTableColumn });
  }
  set SortTableDirection(SortTableDirection: SortTableDirection) {
    this._set({ SortTableDirection });
  }

  _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  _search(): Observable<SearchResult> {
    const { SortTableColumn, SortTableDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let data = sort(this.gridData, SortTableColumn, SortTableDirection);

    // 2. filter
    data = data.filter((user) => matches(user, searchTerm, this.pipe));
    const total = data.length;

    // 3. paginate
    data = data.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ data, total });
  }
}
