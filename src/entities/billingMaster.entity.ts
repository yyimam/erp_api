import { BillingDetails } from './billingDetails.entity';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, DataType, ForeignKey, BelongsTo,  HasMany } from 'sequelize-typescript';
@Table({tableName: 'billing_master'})
export class BillingMaster extends Model {
  
  @PrimaryKey
  @Column
  idno: number;

  @Column
  EntryNo: number;
  
  @Column
  billno: string;
  
  @Column
  edate: Date;
  
  @Column
  sysdate: Date;
  
  @Column
  party_ac: string;
  
  @Column
  dr_cr_ac: string;
  
  @Column
  dcno: string;
  
  @Column
  estatus: string;
  
  @Column
  order_no: number;
  
  @Column
  remarks: string;
  
  @Column
  gst: number;
  
  @Column
  gstAmount: number;
  
  @Column
  gstinv: string;
  
  @Column
  gst_ac: string;
  
  @Column
  sed: number;
  
  @Column
  sedAmount: number;
  
  @Column
  sed_ac: string;
  
  @Column
  disc_p: number;
  
  @Column
  discount: number;
  
  @Column
  grossamount: number;
  
  @Column
  netamount: number;
  
  @Column
  etime: string;
  
  @Column
  terms: string;
  
  @Column
  Warehouse_Code: string;
  
  @Column
  doentryno: number;
  
  @Column
  ent_date: Date;
  
  @Column
  Credit_Days: number;
  
  @Column
  Circular_No: number;
  
  
  @Column
  Vehicle_No: string;
  
  @Column
  duedate: Date;
  
  @Column
  Vendor_No: string;
  
  @Column
  r_No: string;
  
  @Column
  rvno: string;
  
  @Column
  rvdate: Date;
  
  @Column
  Shop: string;
  
  @Column
  sol_com: number;
  
  @Column
  sol_comA: number;
  
  @Column
  osb_com: number;
  
  @Column
  osb_comA: number;
  
  @Column
  freight: number;
  
  @Column
  Transporter: string;
  
  @Column
  porder_no: string;
  
  @Column
  return_type: string;
  
  @Column
  oldcirno: string;
  
  @Column
  dincentp: number;
  
  @Column
  dincentamt: number;
  
  @Column
  dincentac: string;
  
  @Column
  grn_no: number;
  
  @Column
  dc_no: number;
  
  @Column
  posted: number;
  
  @Column
  biltyno: string;
  
  @Column
  mir_No: number;
  
  @Column
  gor_No: string;
  
  @Column
  container_no: string;
  
  @Column
  seal_no: string;
  
  @Column
  period: string;
  
  @Column
  bilty_filename: string;
  
  @Column
  itemdescription: string;
  
  @Column
  grn_closed: number;
  
  @Column
  fitem_code: string;
  
  @Column
  batch_qty: number;
  
  @Column
  Recipe_No: number;
  
  @Column
  batch_id: string;
  
  @Column
  batch_id_no: number;
  
  @Column
  mat_type: string;
  
  @Column
  dc_no_SR: number;
  
  @Column
  S_dc_no: number;
  
  @Column
  transporter_name: string;
  
  @Column
  alert_posted: number;
  
  @Column
  file_name: string;
  
  @Column
  gpno: string;
  
  @Column
  doc_attached: number;
  
  @Column
  post_date: Date;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasMany(() => BillingDetails)
  billingDetails: BillingDetails[]
  // @BelongsTo(() => BillingDetails)
  // billingDetails: BillingDetails; 
 
}