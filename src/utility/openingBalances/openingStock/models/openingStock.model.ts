import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, AfterFind, AfterConnect, AfterInit, } from 'sequelize-typescript';

@Table({ tableName: 'Stock' })
export class OpeningStock extends Model {


  @PrimaryKey
  @Column({
    autoIncrement: true,
    unique: true,
    field: "idno"
  })
  id: number;

  @Column
  pidno?: number;

  @Column
  cidno?: number;

  @Column
  edate?: Date;

  @Column
  estatus?: string;

  @Column
  itemcode?: string;

  @Column
  Rec?: number;

  @Column
  Iss?: number;

  @Column
  loose_Rec?: number;

  @Column
  loose_Iss?: number;

  @Column
  balance?: number;

  @Column
  loose_balance?: number;

  @Column
  Amount?: number;

  @Column
  description?: string;

  @Column
  refno?: string;

  @Column
  Rate?: number;

  @Column
  Avg_Rate?: number;

  @Column
  Warehouse_Code?: string;

  @Column
  party?: string;

  @Column
  Balance_Amount?: number;

  @Column
  Order_No?: number;

  @Column
  pcspctn?: number;

  @Column
  yard_rec?: number;

  @Column
  yard_iss?: number;

  @Column
  rate_yards?: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;
  


}