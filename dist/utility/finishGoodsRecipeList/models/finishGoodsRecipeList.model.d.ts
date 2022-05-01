import { FinishGoodsRecipeMaster } from './../../../entities/finishGoodsRecipeMaster.model';
import { Model } from 'sequelize-typescript';
export declare class FinishGoodsRecipeList extends Model {
    id: number;
    mainitemcode: string;
    subitemcode: string;
    description: string;
    qty: number;
    sysdate: Date;
    entryno: number;
    edate: Date;
    disabled: number;
    wastage_qty: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    FinishGoodsRecipeMaster: FinishGoodsRecipeMaster;
}
