import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { product, productId } from './product';
export interface itemcatAttributes {
    code: string;
    name?: string;
}
export declare type itemcatPk = "code";
export declare type itemcatId = itemcat[itemcatPk];
export declare type itemcatOptionalAttributes = "name";
export declare type itemcatCreationAttributes = Optional<itemcatAttributes, itemcatOptionalAttributes>;
export declare class itemcat extends Model<itemcatAttributes, itemcatCreationAttributes> implements itemcatAttributes {
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
    static initModel(sequelize: Sequelize.Sequelize): typeof itemcat;
}
