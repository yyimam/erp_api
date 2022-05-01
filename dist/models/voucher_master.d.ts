import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { voucher_detail, voucher_detailId } from './voucher_detail';
export interface voucher_masterAttributes {
    idno: number;
    per?: string;
    vno?: number;
    vtype?: string;
    edate?: Date;
    sysdate?: Date;
    mainacode?: string;
    chequeno?: string;
    chq_date?: Date;
    person?: string;
    posted: number;
    ent_date?: Date;
    clearing_date?: Date;
    payreq_no?: number;
    payreq_cidno?: number;
    itax_per?: number;
    alert_posted?: number;
    doc_attached?: number;
}
export declare type voucher_masterPk = "idno";
export declare type voucher_masterId = voucher_master[voucher_masterPk];
export declare type voucher_masterOptionalAttributes = "per" | "vno" | "vtype" | "edate" | "sysdate" | "mainacode" | "chequeno" | "chq_date" | "person" | "ent_date" | "clearing_date" | "payreq_no" | "payreq_cidno" | "itax_per" | "alert_posted" | "doc_attached";
export declare type voucher_masterCreationAttributes = Optional<voucher_masterAttributes, voucher_masterOptionalAttributes>;
export declare class voucher_master extends Model<voucher_masterAttributes, voucher_masterCreationAttributes> implements voucher_masterAttributes {
    idno: number;
    per?: string;
    vno?: number;
    vtype?: string;
    edate?: Date;
    sysdate?: Date;
    mainacode?: string;
    chequeno?: string;
    chq_date?: Date;
    person?: string;
    posted: number;
    ent_date?: Date;
    clearing_date?: Date;
    payreq_no?: number;
    payreq_cidno?: number;
    itax_per?: number;
    alert_posted?: number;
    doc_attached?: number;
    mainacode_ac: ac;
    getMainacode_ac: Sequelize.BelongsToGetAssociationMixin<ac>;
    setMainacode_ac: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
    createMainacode_ac: Sequelize.BelongsToCreateAssociationMixin<ac>;
    voucher_details: voucher_detail[];
    getVoucher_details: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
    setVoucher_details: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
    addVoucher_detail: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
    addVoucher_details: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
    createVoucher_detail: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
    removeVoucher_detail: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
    removeVoucher_details: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
    hasVoucher_detail: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
    hasVoucher_details: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
    countVoucher_details: Sequelize.HasManyCountAssociationsMixin;
    static initModel(sequelize: Sequelize.Sequelize): typeof voucher_master;
}
