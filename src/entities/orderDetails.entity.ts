import { Product } from './../utility/products/models/product.model';
import { OrderMaster } from './orderMaster.entity';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, DataType, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';

@Table({ tableName: 'order_detail' })
export class OrderDetails extends Model {

    @PrimaryKey
    @Column({
        autoIncrement: true,
        field: 'idno'
    })
    id: number;

    @Column
    @ForeignKey(() => OrderMaster)
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
    pcspctn: number;

    @Column
    loose_qty: number;

    @Column
    qty_in_pcs: number;

    @Column
    bonuspcs: number;

    @Column
    itemdiscount: number;

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
    qty: number;

    @Column
    rate: number;

    @Column
    delivery_date: Date;

    @Column
    MRP: number;

    @Column
    promotion_sales: number;

    @Column
    particular: string;

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt: Date;

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt: Date;

    @DeletedAt
    @Column({ field: 'deleted_at' })
    deletedAt: Date;

    @BelongsTo(() => OrderMaster, {  onUpdate: "cascade", onDelete: "cascade", hooks: true, foreignKey: { allowNull: false } })
    orderDetails: OrderMaster;

    @BelongsTo(() => Product )
    product: Product; 

}