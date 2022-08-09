import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleCell]',
})
export class StyleCellDirective {
  @Input() appStyleCell:any;
  @Input()
    field!: string;
  constructor(private el:ElementRef,private renderer:Renderer2){}
  ngOnInit(): void{
    if(this.field==='transaction_status'){
        if(this.appStyleCell==1){
            // this.renderer.setStyle(this.el.nativeElement,'color','green');
            this.el.nativeElement.innerHTML='Success';
            this.el.nativeElement.classList.add('badge','badge-success-lighten');
        }
        else if(this.appStyleCell==2){
            this.el.nativeElement.innerHTML='Fail';
            this.el.nativeElement.classList.add('badge','badge-danger-lighten');
        }
    }
    if(this.field==='type'){
        if(this.appStyleCell==2){
            this.el.nativeElement.innerHTML='Paid For Charging';
            this.el.nativeElement.classList.add('badge','badge-success-lighten');
        }
        else{
            this.el.nativeElement.innerHTML='Added to Wallet';
            this.el.nativeElement.classList.add('badge','badge-success-lighten');
        }
    }
    if(this.field==='debit_or_credit'){
        if(this.appStyleCell==1){
            this.el.nativeElement.innerHTML='Debit';
        }
        else{
            this.el.nativeElement.innerHTML='Credit';
        }
    }
    if(this.field==='status'){
        if(this.appStyleCell==1){
            this.el.nativeElement.innerHTML='';
            this.el.nativeElement.classList.add('activeStatus');
        }
        else{
            this.el.nativeElement.innerHTML='';
            this.el.nativeElement.classList.add('inactiveStatus');
        }
    }
  }
}
