import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { payreq_detail, payreq_detailId } from './payreq_detail';
export interface payreq_masterAttributes {
    idno: number;
    EntryNo: number;
    edate?: Date;
    refno?: string;
    remarks?: string;
    loginuserid?: string;
}
export declare type payreq_masterPk = "idno";
export declare type payreq_masterId = payreq_master[payreq_masterPk];
export declare type payreq_masterOptionalAttributes = "edate" | "refno" | "remarks" | "loginuserid";
export declare type payreq_masterCreationAttributes = Optional<payreq_masterAttributes, payreq_masterOptionalAttributes>;
export declare class payreq_master extends Model<payreq_masterAttributes, payreq_masterCreationAttributes> implements payreq_masterAttributes {
    idno: number;
    EntryNo: number;
    edate?: Date;
    refno?: string;
    remarks?: string;
    loginuserid?: string;
    payreq_details: payreq_detail[];
    getPayreq_details: Sequelize.HasManyGetAssociationsMixin<payreq_detail>;
    setPayreq_details: Sequelize.HasManySetAssociationsMixin<payreq_detail, payreq_detailId>;
    addPayreq_detail: Sequelize.HasManyAddAssociationMixin<payreq_detail, payreq_detailId>;
    addPayreq_details: Sequelize.HasManyAddAssociationsMixin<payreq_detail, payreq_detailId>;
    createPayreq_detail: Sequelize.HasManyCreateAssociationMixin<payreq_detail>;
    removePayreq_detail: Sequelize.HasManyRemoveAssociationMixin<payreq_detail, payreq_detailId>;
    removePayreq_details: Sequelize.HasManyRemoveAssociationsMixin<payreq_detail, payreq_detailId>;
    hasPayreq_detail: Sequelize.HasManyHasAssociationMixin<payreq_detail, payreq_detailId>;
    hasPayreq_details: Sequelize.HasManyHasAssociationsMixin<payreq_detail, payreq_detailId>;
    countPayreq_details: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof payreq_master;
}
