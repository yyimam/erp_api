import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';
import { BillingMaster } from './billingMaster.entity';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from 'src/utility/products/models/product.model';

@Table({tableName: 'billing_detail'})
export class BillingDetails extends Model {
  
  @PrimaryKey
  @Column
  idno: number;
  
  @Column
  @ForeignKey(() => BillingMaster)
  pidno: number;
  
  @Column
  estatus: string;
  
  @Column
  @ForeignKey(() => Product)
  itemcode: string;
  
  @Column
  description: string;
  
  @Column
  itemunit: string;
  
  @Column
  amount: number;
  
  @Column
  sed: number;
  
  @Column
  sedamount: number;
  
  @Column
  gst: number;
  
  @Column
  gstamount: number;
  
  @Column
  netamount: number;
  
  @Column
  itemdiscount: number;
  
  @Column
  expiry_date: Date;
  
  @Column
  loose_qty: number;
  
  @Column
  qty_in_pcs: number;
  
  @Column
  pcspctn: number;
  
  @Column
  bonuspcs: number;
  
  @Column
  itemdiscount_P: number;
  
  @Column
  schmper: number;
  
  @Column
  schmamt: number;
  
  @Column
  xschmper: number;
  
  @Column
  xschmamt: number;
  
  @Column
  oschmper: number;
  
  @Column
  oschmamt: number;
  
  @Column
  qty: number;
  
  @Column
  rate: number;
  
  @Column
  @ForeignKey(() => WarehouseList)
  Warehouse_Code: string;
  
  @Column
  @ForeignKey(() => Product)
  fitemcode: string;
  
  @Column
  @ForeignKey(() => WarehouseList)
  Warehouse_CodeInto: string;
  
  @Column
  rate_change: number;
  
  @Column
  MRP: number;
  
  @Column
  QC_Posted: number;
  
  @Column
  QC_Remarks: string;
  
  @Column
  QC_Post_Date: Date;
  
  @Column
  batch_qty: number;
  
  @Column
  iss_qty: number;
  
  @Column
  req_qty: number;
  
  @Column
  batch_id: string;
  
  @Column
  promotion_sales: number;
  
  @Column
  Batch_Code: string;
  
  @Column
  itaxAmount: number;
  
  @Column
  qty_yards: number;
  
  @Column
  rate_yards: number;
  
  @Column
  amount_yards: number;
  
  @Column
  tailor_ac: string;
  
  @Column
  particular: string;
  
  @Column
  size: number;
  
  @Column
  debit_Ac: string;
  
  @Column
  credit_Ac: string;
  
  @Column
  discountD: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @BelongsTo(() => BillingMaster)
  billingDetails: BillingMaster; 

  @BelongsTo(() => Product, { as: '_itemcode', foreignKey: 'itemcode' } )
  product: Product; 

  @BelongsTo(() => Product, { as: '_fitemcode', foreignKey: 'fitemcode' } )
  product2: Product; 

  @BelongsTo(() => WarehouseList, { as: '_Warehouse_Code', foreignKey: 'Warehouse_Code' } )
  WarehouseList: WarehouseList; 

  @BelongsTo(() => WarehouseList, { as: '_Warehouse_CodeInto', foreignKey: 'Warehouse_CodeInto' } )
  WarehouseList2: WarehouseList; 


}