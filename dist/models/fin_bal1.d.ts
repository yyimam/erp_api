import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { fin_ac, fin_acId } from './fin_ac';
import type { fin_notes_master, fin_notes_masterId } from './fin_notes_master';
export interface fin_bal1Attributes {
    idno: number;
    sno?: number;
    descrip?: string;
    note_no?: number;
    fin_acode?: string;
    ac_acode?: string;
    calc1?: string;
    calc2?: string;
    lines?: string;
    sysdate?: Date;
}
export declare type fin_bal1Pk = "idno";
export declare type fin_bal1Id = fin_bal1[fin_bal1Pk];
export declare type fin_bal1OptionalAttributes = "sno" | "descrip" | "note_no" | "fin_acode" | "ac_acode" | "calc1" | "calc2" | "lines" | "sysdate";
export declare type fin_bal1CreationAttributes = Optional<fin_bal1Attributes, fin_bal1OptionalAttributes>;
export declare class fin_bal1 extends Model<fin_bal1Attributes, fin_bal1CreationAttributes> implements fin_bal1Attributes {
    idno: number;
    sno?: number;
    descrip?: string;
    note_no?: number;
    fin_acode?: string;
    ac_acode?: string;
    calc1?: string;
    calc2?: string;
    lines?: string;
    sysdate?: Date;
    ac_acode_ac: ac;
    getAc_acode_ac: Sequelize.BelongsToGetAssociationMixin<ac>;
    setAc_acode_ac: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
    createAc_acode_ac: Sequelize.BelongsToCreateAssociationMixin<ac>;
    fin_acode_fin_ac: fin_ac;
    getFin_acode_fin_ac: Sequelize.BelongsToGetAssociationMixin<fin_ac>;
    setFin_acode_fin_ac: Sequelize.BelongsToSetAssociationMixin<fin_ac, fin_acId>;
    createFin_acode_fin_ac: Sequelize.BelongsToCreateAssociationMixin<fin_ac>;
    note_no_fin_notes_master: fin_notes_master;
    getNote_no_fin_notes_master: Sequelize.BelongsToGetAssociationMixin<fin_notes_master>;
    setNote_no_fin_notes_master: Sequelize.BelongsToSetAssociationMixin<fin_notes_master, fin_notes_masterId>;
    createNote_no_fin_notes_master: Sequelize.BelongsToCreateAssociationMixin<fin_notes_master>;
    static initModel(sequelize: Sequelize.Sequelize): typeof fin_bal1;
}
