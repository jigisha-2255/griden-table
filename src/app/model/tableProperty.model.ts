import { SortTableColumn, SortTableDirection } from "../dynamic-table/test-table-layout/sortable-test-table-layout.directive";

export interface TableProperty{
    field: string;
    title: string;
    width: string;
}

export interface icons{
    title:string;
    icon:string;
    routerLink:string;
}

export interface SortTestTableEvent {
    column: SortTableColumn;
    direction: SortTableDirection;
}