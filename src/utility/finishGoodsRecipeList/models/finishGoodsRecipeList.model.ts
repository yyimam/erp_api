import { FinishGoodsRecipeMaster } from './../../../entities/finishGoodsRecipeMaster.model';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo, Index } from 'sequelize-typescript';

@Table({
  tableName: 'assembling_list',
  timestamps: true})
export class FinishGoodsRecipeList extends Model {

  @PrimaryKey
  @Column({
    autoIncrement: true,
    field: 'idno'
  })
  id: number;
  
  @ForeignKey(() => FinishGoodsRecipeMaster)
  @Column
  mainitemcode: string;
  
  @Column
  subitemcode: string;
  
  @Column
  description: string;
  
  @Column
  qty: number;
  
  @Column
  sysdate: Date;
  
  @Column
  entryno: number;
  
  @Column
  edate: Date;
  
  @Column
  disabled: number;
  
  @Column
  wastage_qty: number;


  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @BelongsTo(() => FinishGoodsRecipeMaster) 
  FinishGoodsRecipeMaster: FinishGoodsRecipeMaster;

}