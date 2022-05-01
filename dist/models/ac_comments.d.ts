import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
export interface ac_commentsAttributes {
    idno: number;
    edate?: Date;
    acode?: string;
    user_id?: string;
    sysuser?: string;
    comments?: string;
    ledger_refno?: string;
    ledger_date?: Date;
}
export declare type ac_commentsPk = "idno";
export declare type ac_commentsId = ac_comments[ac_commentsPk];
export declare type ac_commentsOptionalAttributes = "edate" | "acode" | "user_id" | "sysuser" | "comments" | "ledger_refno" | "ledger_date";
export declare type ac_commentsCreationAttributes = Optional<ac_commentsAttributes, ac_commentsOptionalAttributes>;
export declare class ac_comments extends Model<ac_commentsAttributes, ac_commentsCreationAttributes> implements ac_commentsAttributes {
    idno: number;
    edate?: Date;
    acode?: string;
    user_id?: string;
    sysuser?: string;
    comments?: string;
    ledger_refno?: string;
    ledger_date?: Date;
    acode_ac: ac;
    getAcode_ac: Sequelize.BelongsToGetAssociationMixin<ac>;
    setAcode_ac: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
    createAcode_ac: Sequelize.BelongsToCreateAssociationMixin<ac>;
    static initModel(sequelize: Sequelize.Sequelize): typeof ac_comments;
}
