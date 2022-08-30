import { SortTableColumn, SortTableDirection } from "../dynamic-table/test-table-layout/sortable-test-table-layout.directive";

export interface Shared {
    expand:'',
    id: '';
    first_name:'';
    status:'',
    contact_number:'',
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
    user:{
      first_name:'',
      last_name:'',
      email:''
    }
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
