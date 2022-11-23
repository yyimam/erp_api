import { FinishGoodsRecipeMaster } from './../../../entities/finishGoodsRecipeMaster.model';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,HasMany, Index, HasOne } from 'sequelize-typescript';
import { Product } from 'src/utility/products/models/product.model';

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

  @Column
  @ForeignKey(() => FinishGoodsRecipeList)
  @ForeignKey(() => FinishGoodsRecipeMaster)
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

  @BelongsTo(() => FinishGoodsRecipeMaster ) 
  finishGoodsRecipeList: FinishGoodsRecipeMaster;
  
  @HasOne(() => Product, {as:'subitemcode1',sourceKey: "subitemcode"})
  subitemcodeInfo: Product;

  @HasOne(() => Product, {as:'mainitemcode1', sourceKey: "mainitemcode"})
  mainitemcodeInfo: Product;

  @HasMany(() => FinishGoodsRecipeList,{as:'subitemCodeList2', sourceKey: "subitemcode"})//
  finishGoodsRecipeList2: FinishGoodsRecipeList[];

  @BelongsTo(() =>   FinishGoodsRecipeList,  { foreignKey: 'mainitemcode'}) 
  subitemCodeList1: FinishGoodsRecipeList;

}