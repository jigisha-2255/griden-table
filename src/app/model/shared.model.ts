import { SortTableColumn, SortTableDirection } from "../dynamic-table/test-table-layout/sortable-test-table-layout.directive";

export interface UserName{
  first_name:'',
  last_name:'',
  email:''
}
export interface Shared {
    [id: string]: '';
    first_name:'';
    last_name:'',
    email:'',
    status:'',
    contact_number:'',
    user_type:'',
    action:'',
    expand:'',
    checked: '',
    wallet_id: '',
    type: '',
    amount: '',
    updated_balance: '',
    debit_or_credit: '',
    transaction_datetime: '',
    transaction_status: '',
    // user:UserName
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
