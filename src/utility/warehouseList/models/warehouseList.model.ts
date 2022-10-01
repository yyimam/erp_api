import { BillingDetails } from './../../../entities/billingDetails.entity';
import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey,HasOne } from 'sequelize-typescript';
import { BillingMaster } from 'src/entities/billingMaster.entity';
import { OrderDetails } from 'src/entities/orderDetails.entity';
import { OrderMaster } from 'src/entities/orderMaster.entity';

@Table({tableName: 'Warehouse_list'})
export class WarehouseList extends Model {

  @Column({ 
    autoIncrement: true,
    // primaryKey: true
  })
  id: number;

  @PrimaryKey
  @Column({})
  code: string;

  @Column
  name: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasOne(() => OrderMaster)
  orderMaster: OrderMaster;

  @HasOne(() => BillingMaster)
  billingMaster: BillingMaster;

  @HasOne(() => BillingDetails )
  billingDetails: BillingDetails;

}