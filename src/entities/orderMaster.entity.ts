import { Product } from 'src/utility/products/models/product.model';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import { OrderDetails } from './orderDetails.entity';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';

@Table({ tableName: 'order_master' })
export class OrderMaster extends Model {

  @PrimaryKey
  @Column({
    autoIncrement: true,
    field: 'idno'
  })
  id: number;

  @Column
  EntryNo: number;

  @Column
  RefNo: string;

  @Column
  edate: Date;

  @Column
  sysdate: Date;

  @Column
  @ForeignKey(() => AC)
  party_ac: string;

  @Column
  estatus: string;

  @Column
  remarks: string;

  @Column
  gst: number;

  @Column
  gstAmount: number;

  @Column
  sed: number;

  @Column
  sedAmount: number;

  @Column
  disc_p: number;

  @Column
  discount: number;

  @Column
  grossamount: number;

  @Column
  netamount: number;

  @Column
  @ForeignKey(() => WarehouseList)
  Warehouse_Code: string;

  @Column
  Transporter: string;

  @Column
  DN_Address: string;

  @Column
  Circular_No: number;

  @Column
  Invoice_No: string;

  @Column
  Order_No: string;

  @Column
  Vendor_No: string;

  @Column
  Shop: string;

  @Column
  ent_date: Date;

  @Column
  itemdescription: string;

  @Column
  orderclosed: boolean;

  @Column
  posted: number;

  @Column
  ledgerbal: number;

  @Column
  overdue: number;

  @Column
  delivery_date: Date;

  @Column
  terms: string;

  @Column
  DVC_Per: number;

  @Column
  DVC_Amount: number;

  @Column
  DVC_Remarks: string;

  @Column
  dc_no: number;

  @Column
  alert_posted: number;

  @Column
  size_by: string;

  @Column
  fitted_by: string;

  @Column
  salesman: string;

  @Column
  doc_attached: number;

  @Column
  customer_name: string;

  @Column
  customer_address: string;

  @Column
  contact_no1: string;

  @Column
  contact_no2: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasMany(() => OrderDetails, { onUpdate: "cascade", onDelete: "cascade", hooks: true })
  orderDetails: OrderDetails[]

  @BelongsTo(() => AC)
  ac: AC;

  @BelongsTo(() => WarehouseList)
  warehouseList: WarehouseList;

}