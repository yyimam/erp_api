import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { product, productId } from './product';
export interface itemtypeAttributes {
    code: string;
    name?: string;
}
export declare type itemtypePk = "code";
export declare type itemtypeId = itemtype[itemtypePk];
export declare type itemtypeOptionalAttributes = "name";
export declare type itemtypeCreationAttributes = Optional<itemtypeAttributes, itemtypeOptionalAttributes>;
export declare class itemtype extends Model<itemtypeAttributes, itemtypeCreationAttributes> implements itemtypeAttributes {
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
    static initModel(sequelize: Sequelize.Sequelize): typeof itemtype;
}
