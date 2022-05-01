import { Product } from './../utility/products/models/product.model';
import { FinishGoodsRecipeList } from './../utility/finishGoodsRecipeList/models/finishGoodsRecipeList.model';
import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, HasMany, HasOne, BelongsTo } from 'sequelize-typescript';

      @Table({
        tableName: 'assembling_master',
        timestamps: true})
      export class FinishGoodsRecipeMaster extends Model {

        // @PrimaryKey
        @Column({autoIncrement: true})
        idno: number;
        
        @PrimaryKey
        @Column
        mainitemcode: string;

        @Column
        disabled: number;

        @Column
        description: string;

        @CreatedAt
        @Column({ field: 'created_at' })
        createdAt: Date;

        @UpdatedAt
        @Column({ field: 'updated_at' })
        updatedAt: Date;

        @DeletedAt
        @Column({ field: 'deleted_at' })
        deletedAt: Date;

        @HasOne(() => Product, 'code')
        mainitemcodeDetails: Product;

        @HasMany(() => FinishGoodsRecipeList)
        finishGoodsRecipeList: FinishGoodsRecipeList[];

      }