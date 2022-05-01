import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { payreq_master, payreq_masterId } from './payreq_master';
export interface payreq_detailAttributes {
    idno: number;
    pidno: number;
    party?: string;
    description?: string;
    amount?: number;
    chq_Date?: Date;
}
export declare type payreq_detailPk = "idno";
export declare type payreq_detailId = payreq_detail[payreq_detailPk];
export declare type payreq_detailOptionalAttributes = "party" | "description" | "amount" | "chq_Date";
export declare type payreq_detailCreationAttributes = Optional<payreq_detailAttributes, payreq_detailOptionalAttributes>;
export declare class payreq_detail extends Model<payreq_detailAttributes, payreq_detailCreationAttributes> implements payreq_detailAttributes {
    idno: number;
    pidno: number;
    party?: string;
    description?: string;
    amount?: number;
    chq_Date?: Date;
    party_ac: ac;
    getParty_ac: Sequelize.BelongsToGetAssociationMixin<ac>;
    setParty_ac: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
    createParty_ac: Sequelize.BelongsToCreateAssociationMixin<ac>;
    pidno_payreq_master: payreq_master;
    getPidno_payreq_master: Sequelize.BelongsToGetAssociationMixin<payreq_master>;
    setPidno_payreq_master: Sequelize.BelongsToSetAssociationMixin<payreq_master, payreq_masterId>;
    createPidno_payreq_master: Sequelize.BelongsToCreateAssociationMixin<payreq_master>;
    static initModel(sequelize: Sequelize.Sequelize): typeof payreq_detail;
}
