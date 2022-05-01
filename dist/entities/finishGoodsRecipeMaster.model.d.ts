import { Product } from './../utility/products/models/product.model';
import { FinishGoodsRecipeList } from './../utility/finishGoodsRecipeList/models/finishGoodsRecipeList.model';
import { Model } from 'sequelize-typescript';
export declare class FinishGoodsRecipeMaster extends Model {
    idno: number;
    mainitemcode: string;
    disabled: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    mainitemcodeDetails: Product;
    finishGoodsRecipeList: FinishGoodsRecipeList[];
}
