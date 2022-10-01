import { FinishGoodsRecipeMaster } from './../../../entities/finishGoodsRecipeMaster.model';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo,HasMany, Index } from 'sequelize-typescript';

@Table({
  tableName: 'assembling_list',
  timestamps: true})
export class FinishGoodsRecipeList extends Model {


  @Column({
    autoIncrement: true,
    field: 'idno'
  })
  id: number;
  
  @PrimaryKey
  @ForeignKey(() => FinishGoodsRecipeMaster)
  // @ForeignKey(() => FinishGoodsRecipeList)
  @Column
  mainitemcode: string;
  
  @ForeignKey(() => FinishGoodsRecipeList)
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
  FinishGoodsRecipeMaster: FinishGoodsRecipeMaster;

  @HasMany(() => FinishGoodsRecipeList, 'subitemcode' )//
  finishGoodsRecipeList2: FinishGoodsRecipeList[];

  @BelongsTo(() =>   FinishGoodsRecipeList,  { as: '_subitemcode', foreignKey: 'mainitemcode' }) 
  finishGoodsRecipeList: FinishGoodsRecipeList;

  // SELECT * FROM `assembling_list` as t inner join `assembling_list` as s on t.subitemcode = s.mainitemcode WHERE t.subitemcode=10106

}