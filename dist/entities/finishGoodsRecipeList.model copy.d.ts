import { Model } from 'sequelize-typescript';
export declare class finishGoodsRecipeList extends Model {
    idno: number;
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
}
