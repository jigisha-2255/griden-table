import { SortTableColumn, SortTableDirection } from "../table-layout/sortable-table-layout.directive";

export interface Users {
  id: string;
  checked: boolean;
  status: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  contact_number: string;
  user_type: string;
  token: string;
  email_verified: number;
  admin_approved: number;
  created_dt: string;
  modified_dt: string;
  last_login_dt: string;
  ip_address:string;
  signup_otp_verified: number;
  deleted: number;
  temp_password: string;
  temp_email: string;
}
export interface UsersResponse{
  result:Array<Users>;
}

export interface SearchResult {
  data: Users[];
  total: number;
}

export interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  SortTableColumn: SortTableColumn;
  SortTableDirection: SortTableDirection;
}
