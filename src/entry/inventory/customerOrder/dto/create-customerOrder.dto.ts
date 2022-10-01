export class CreateCustomerOrderDto {
  idno: number;
  EntryNo?: number;
  RefNo?: string;
  edate?: Date;
  sysdate?: Date;
  party_ac?: string;
  estatus?: string;
  remarks?: string;
  gst?: number;
  gstAmount?: number;
  sed?: number;
  sedAmount?: number;
  disc_p?: number;
  discount?: number;
  grossamount?: number;
  netamount?: number;
  Warehouse_Code?: string;
  Transporter?: string;
  DN_Address?: string;
  Circular_No?: number;
  Invoice_No?: string;
  Order_No?: string;
  Vendor_No?: string;
  Shop?: string;
  ent_date?: Date;
  itemdescription?: string;
  orderclosed?: boolean;
  posted?: number;
  ledgerbal?: number;
  overdue?: number;
  delivery_date?: Date;
  terms?: string;
  DVC_Per?: number;
  DVC_Amount?: number;
  DVC_Remarks?: string;
  dc_no?: number;
  alert_posted?: number;
  size_by?: string;
  fitted_by?: string;
  salesman?: string;
  doc_attached?: number;
  customer_name?: string;
  customer_address?: string;
  contact_no1?: string;
  contact_no2?: string;
  orderDetails: [
    {
      idno: number,      
      pidno:  number,      
      estatus : string,
      itemcode : string,
      description : string,
      itemunit : string,
      amount : number,
      sed : number,
      sedamount : number,
      gst : number,
      gstamount : number,
      netamount : number,
      pcspctn : number,
      loose_qty : number,
      qty_in_pcs : number,
      bonuspcs : number,
      itemdiscount : number,
      itemdiscount_P : number,
      schmper : number,
      schmamt : number,
      xschmper : number,
      xschmamt : number,
      qty : number,
      rate : number,
      delivery_date : Date,
      MRP : number,
      promotion_sales : number,
      particular : string
    }

  ]
}