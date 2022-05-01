import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { product, productId } from './product';
export interface itemsubcatlistAttributes {
    code: string;
    name?: string;
}
export declare type itemsubcatlistPk = "code";
export declare type itemsubcatlistId = itemsubcatlist[itemsubcatlistPk];
export declare type itemsubcatlistOptionalAttributes = "name";
export declare type itemsubcatlistCreationAttributes = Optional<itemsubcatlistAttributes, itemsubcatlistOptionalAttributes>;
export declare class itemsubcatlist extends Model<itemsubcatlistAttributes, itemsubcatlistCreationAttributes> implements itemsubcatlistAttributes {
    code: string;
    name?: string;
    products: product[];
    getProducts: Sequelize.HasManyGetAssociationsMixin<product>;
    setProducts: Sequelize.HasManySetAssociationsMixin<product, productId>;
    addProduct: Sequelize.HasManyAddAssociationMixin<product, productId>;
    addProducts: Sequelize.HasManyAddAssociationsMixin<product, productId>;
    createProduct: Sequelize.HasManyCreateAssociationMixin<product>;
    removeProduct: Sequelize.HasManyRemoveAssociationMixin<product, productId>;
    removeProducts: Sequelize.HasManyRemoveAssociationsMixin<product, productId>;
    hasProduct: Sequelize.HasManyHasAssociationMixin<product, productId>;
    hasProducts: Sequelize.HasManyHasAssociationsMixin<product, productId>;
    countProducts: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof itemsubcatlist;
}
