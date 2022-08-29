import { SortTableColumn, SortTableDirection } from "../test-table-layout/sortable-test-table-layout.directive";

export interface Shared {
    id: '';
    status:'',
    first_name:'',
    contact_number:'',
    email:'',
    user_type:'',
    action:'',
    checked: '',
    wallet_id: '',
    type: '',
    amount: '',
    updated_balance: '',
    debit_or_credit: '',
    transaction_datetime: '',
    transaction_status: '',
}
export interface SharedResponse{
  result:Array<Shared>;
}

export interface SearchResult {
  data: Shared[];
  total: number;
}

export interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  SortTableColumn: SortTableColumn;
  SortTableDirection: SortTableDirection;
}
