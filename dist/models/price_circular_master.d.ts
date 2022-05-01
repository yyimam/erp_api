import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { price_circular_detail, price_circular_detailId } from './price_circular_detail';
export interface price_circular_masterAttributes {
    idno: number;
    EntryNo: number;
    edate?: Date;
    remarks?: string;
}
export declare type price_circular_masterPk = "idno";
export declare type price_circular_masterId = price_circular_master[price_circular_masterPk];
export declare type price_circular_masterOptionalAttributes = "edate" | "remarks";
export declare type price_circular_masterCreationAttributes = Optional<price_circular_masterAttributes, price_circular_masterOptionalAttributes>;
export declare class price_circular_master extends Model<price_circular_masterAttributes, price_circular_masterCreationAttributes> implements price_circular_masterAttributes {
    idno: number;
    EntryNo: number;
    edate?: Date;
    remarks?: string;
    price_circular_details: price_circular_detail[];
    getPrice_circular_details: Sequelize.HasManyGetAssociationsMixin<price_circular_detail>;
    setPrice_circular_details: Sequelize.HasManySetAssociationsMixin<price_circular_detail, price_circular_detailId>;
    addPrice_circular_detail: Sequelize.HasManyAddAssociationMixin<price_circular_detail, price_circular_detailId>;
    addPrice_circular_details: Sequelize.HasManyAddAssociationsMixin<price_circular_detail, price_circular_detailId>;
    createPrice_circular_detail: Sequelize.HasManyCreateAssociationMixin<price_circular_detail>;
    removePrice_circular_detail: Sequelize.HasManyRemoveAssociationMixin<price_circular_detail, price_circular_detailId>;
    removePrice_circular_details: Sequelize.HasManyRemoveAssociationsMixin<price_circular_detail, price_circular_detailId>;
    hasPrice_circular_detail: Sequelize.HasManyHasAssociationMixin<price_circular_detail, price_circular_detailId>;
    hasPrice_circular_details: Sequelize.HasManyHasAssociationsMixin<price_circular_detail, price_circular_detailId>;
    countPrice_circular_details: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof price_circular_master;
}
