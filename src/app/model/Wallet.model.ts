
export interface chargingSession{
    id: number;
    start_date: string;
    end_date:string;
    duration: string;
    charging_station_id: number;
    charger_id: number;
    // connector_id: null;
    uid: number;
    did: number;
    vid: number;
    // inactivity_time: null;
    power_consumption: number;
    price: number;
    wh_start:number;
    wh_current: number;
    wh_end: number;
    kwatt: number;
    status:number;
    information: string;
    cmd_id: number;
    txn: string;
    deleted: number;
    // ocpp_transaction_id: null;
}
export interface Wallet{
    first_name: string;
    uid: number;
    user: { 
        id: number;
        first_name: string;
        last_name: string;
        email: string;
    }
    wallet_id: string;
    checked:boolean; 
    status: number;
    session_id: number;
    transaction_id: string;
    amount: string;
    updated_balance: string;
    sgst: number;
    cgst: number;
    type: string;
    debit_or_credit: number;
    // opp_wallet_id: null;
    transaction_status: number;
    transaction_datetime: string;
    // ip_address: null;
    // bank_reference_no: null;
    // payment_mode: null;
    created_dt:  string;
    modified_dt:  string;
    // chargingSession:Array<chargingSession>;     
    // oppUser: {}
}
export interface WalletResponse{
    result:Array<Wallet>;
}

export interface SearchResult {
    data: Wallet[];
    total: number;
}

export interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    // SortWalletColumn: SortWalletColumn;
    // SortWalletDirection: SortWalletDirection;
}
  
