import { Model } from 'sequelize-typescript';
export declare class BrandList extends Model {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
