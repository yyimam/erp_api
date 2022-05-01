import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
export interface group_listAttributes {
    code: string;
    name?: string;
}
export declare type group_listPk = "code";
export declare type group_listId = group_list[group_listPk];
export declare type group_listOptionalAttributes = "name";
export declare type group_listCreationAttributes = Optional<group_listAttributes, group_listOptionalAttributes>;
export declare class group_list extends Model<group_listAttributes, group_listCreationAttributes> implements group_listAttributes {
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
    static initModel(sequelize: Sequelize.Sequelize): typeof group_list;
}
