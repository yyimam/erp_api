import { Model } from 'sequelize-typescript';
export declare class ItemType extends Model {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
