import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
export interface city_listAttributes {
    code: string;
    name?: string;
}
export declare type city_listPk = "code";
export declare type city_listId = city_list[city_listPk];
export declare type city_listOptionalAttributes = "name";
export declare type city_listCreationAttributes = Optional<city_listAttributes, city_listOptionalAttributes>;
export declare class city_list extends Model<city_listAttributes, city_listCreationAttributes> implements city_listAttributes {
    code: string;
    name?: string;
    acs: ac[];
    getAcs: Sequelize.HasManyGetAssociationsMixin<ac>;
    setAcs: Sequelize.HasManySetAssociationsMixin<ac, acId>;
    addAc: Sequelize.HasManyAddAssociationMixin<ac, acId>;
    addAcs: Sequelize.HasManyAddAssociationsMixin<ac, acId>;
    createAc: Sequelize.HasManyCreateAssociationMixin<ac>;
    removeAc: Sequelize.HasManyRemoveAssociationMixin<ac, acId>;
    removeAcs: Sequelize.HasManyRemoveAssociationsMixin<ac, acId>;
    hasAc: Sequelize.HasManyHasAssociationMixin<ac, acId>;
    hasAcs: Sequelize.HasManyHasAssociationsMixin<ac, acId>;
    countAcs: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof city_list;
}
