import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { product, productId } from './product';
export interface itembrandlistAttributes {
    code: string;
    name?: string;
}
export declare type itembrandlistPk = "code";
export declare type itembrandlistId = itembrandlist[itembrandlistPk];
export declare type itembrandlistOptionalAttributes = "name";
export declare type itembrandlistCreationAttributes = Optional<itembrandlistAttributes, itembrandlistOptionalAttributes>;
export declare class itembrandlist extends Model<itembrandlistAttributes, itembrandlistCreationAttributes> implements itembrandlistAttributes {
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
    static initModel(sequelize: Sequelize.Sequelize): typeof itembrandlist;
}
