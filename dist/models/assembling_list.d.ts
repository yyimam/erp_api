import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { product, productId } from './product';
export interface assembling_listAttributes {
    idno: number;
    mainitemcode?: string;
    subitemcode?: string;
    description?: string;
    qty?: number;
    sysdate?: Date;
    entryno?: number;
    edate?: Date;
    disabled?: number;
    wastage_qty?: number;
}
export declare type assembling_listPk = "idno";
export declare type assembling_listId = assembling_list[assembling_listPk];
export declare type assembling_listOptionalAttributes = "mainitemcode" | "subitemcode" | "description" | "qty" | "sysdate" | "entryno" | "edate" | "disabled" | "wastage_qty";
export declare type assembling_listCreationAttributes = Optional<assembling_listAttributes, assembling_listOptionalAttributes>;
export declare class assembling_list extends Model<assembling_listAttributes, assembling_listCreationAttributes> implements assembling_listAttributes {
    idno: number;
    mainitemcode?: string;
    subitemcode?: string;
    description?: string;
    qty?: number;
    sysdate?: Date;
    entryno?: number;
    edate?: Date;
    disabled?: number;
    wastage_qty?: number;
    mainitemcode_product: product;
    getMainitemcode_product: Sequelize.BelongsToGetAssociationMixin<product>;
    setMainitemcode_product: Sequelize.BelongsToSetAssociationMixin<product, productId>;
    createMainitemcode_product: Sequelize.BelongsToCreateAssociationMixin<product>;
    subitemcode_product: product;
    getSubitemcode_product: Sequelize.BelongsToGetAssociationMixin<product>;
    setSubitemcode_product: Sequelize.BelongsToSetAssociationMixin<product, productId>;
    createSubitemcode_product: Sequelize.BelongsToCreateAssociationMixin<product>;
    static initModel(sequelize: Sequelize.Sequelize): typeof assembling_list;
}
