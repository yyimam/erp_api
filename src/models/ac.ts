import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac_comments, ac_commentsId } from './ac_comments';
import type { ac_ledger, ac_ledgerId } from './ac_ledger';
import type { billing_detail, billing_detailId } from './billing_detail';
import type { billing_master, billing_masterId } from './billing_master';
import type { city_list, city_listId } from './city_list';
import type { companysetup, companysetupId } from './companysetup';
import type { fin_bal1, fin_bal1Id } from './fin_bal1';
import type { fin_bal2, fin_bal2Id } from './fin_bal2';
import type { fin_notes_detail, fin_notes_detailId } from './fin_notes_detail';
import type { fin_pl, fin_plId } from './fin_pl';
import type { group_list, group_listId } from './group_list';
import type { order_master, order_masterId } from './order_master';
import type { payreq_detail, payreq_detailId } from './payreq_detail';
import type { stock, stockId } from './stock';
import type { voucher_detail, voucher_detailId } from './voucher_detail';
import type { voucher_master, voucher_masterId } from './voucher_master';

export interface acAttributes {
  acode: string;
  title?: string;
  address?: string;
  type?: string;
  clevel?: string;
  parent?: string;
  stregno?: string;
  ntnno?: string;
  lastbal?: number;
  cash_bank?: number;
  aging?: number;
  old_acode?: string;
  parentsname?: string;
  Credit_Days?: number;
  vehicleno?: string;
  emboss_line?: string;
  transporter?: string;
  sol_com?: number;
  osb_com?: number;
  discount?: number;
  cr_limit?: number;
  contactperson?: string;
  telno?: string;
  Show_in_Aging?: number;
  depart1?: string;
  contact_person1?: string;
  contact_mobile1?: string;
  email1?: string;
  depart2?: string;
  contact_person2?: string;
  contact_mobile2?: string;
  email2?: string;
  depart3?: string;
  contact_person3?: string;
  contact_mobile3?: string;
  email3?: string;
  lockuser?: string;
  citycode?: string;
  groupcode?: string;
}

export type acPk = "acode";
export type acId = ac[acPk];
export type acOptionalAttributes = "title" | "address" | "type" | "clevel" | "parent" | "stregno" | "ntnno" | "lastbal" | "cash_bank" | "aging" | "old_acode" | "parentsname" | "Credit_Days" | "vehicleno" | "emboss_line" | "transporter" | "sol_com" | "osb_com" | "discount" | "cr_limit" | "contactperson" | "telno" | "Show_in_Aging" | "depart1" | "contact_person1" | "contact_mobile1" | "email1" | "depart2" | "contact_person2" | "contact_mobile2" | "email2" | "depart3" | "contact_person3" | "contact_mobile3" | "email3" | "lockuser" | "citycode" | "groupcode";
export type acCreationAttributes = Optional<acAttributes, acOptionalAttributes>;

export class ac extends Model<acAttributes, acCreationAttributes> implements acAttributes {
  acode!: string;
  title?: string;
  address?: string;
  type?: string;
  clevel?: string;
  parent?: string;
  stregno?: string;
  ntnno?: string;
  lastbal?: number;
  cash_bank?: number;
  aging?: number;
  old_acode?: string;
  parentsname?: string;
  Credit_Days?: number;
  vehicleno?: string;
  emboss_line?: string;
  transporter?: string;
  sol_com?: number;
  osb_com?: number;
  discount?: number;
  cr_limit?: number;
  contactperson?: string;
  telno?: string;
  Show_in_Aging?: number;
  depart1?: string;
  contact_person1?: string;
  contact_mobile1?: string;
  email1?: string;
  depart2?: string;
  contact_person2?: string;
  contact_mobile2?: string;
  email2?: string;
  depart3?: string;
  contact_person3?: string;
  contact_mobile3?: string;
  email3?: string;
  lockuser?: string;
  citycode?: string;
  groupcode?: string;

  // ac belongsTo ac via parent
  parent_ac!: ac;
  getParent_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setParent_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createParent_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // ac hasMany ac_comments via acode
  ac_comments!: ac_comments[];
  getAc_comments!: Sequelize.HasManyGetAssociationsMixin<ac_comments>;
  setAc_comments!: Sequelize.HasManySetAssociationsMixin<ac_comments, ac_commentsId>;
  addAc_comment!: Sequelize.HasManyAddAssociationMixin<ac_comments, ac_commentsId>;
  addAc_comments!: Sequelize.HasManyAddAssociationsMixin<ac_comments, ac_commentsId>;
  createAc_comment!: Sequelize.HasManyCreateAssociationMixin<ac_comments>;
  removeAc_comment!: Sequelize.HasManyRemoveAssociationMixin<ac_comments, ac_commentsId>;
  removeAc_comments!: Sequelize.HasManyRemoveAssociationsMixin<ac_comments, ac_commentsId>;
  hasAc_comment!: Sequelize.HasManyHasAssociationMixin<ac_comments, ac_commentsId>;
  hasAc_comments!: Sequelize.HasManyHasAssociationsMixin<ac_comments, ac_commentsId>;
  countAc_comments!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany ac_ledger via acode
  ac_ledgers!: ac_ledger[];
  getAc_ledgers!: Sequelize.HasManyGetAssociationsMixin<ac_ledger>;
  setAc_ledgers!: Sequelize.HasManySetAssociationsMixin<ac_ledger, ac_ledgerId>;
  addAc_ledger!: Sequelize.HasManyAddAssociationMixin<ac_ledger, ac_ledgerId>;
  addAc_ledgers!: Sequelize.HasManyAddAssociationsMixin<ac_ledger, ac_ledgerId>;
  createAc_ledger!: Sequelize.HasManyCreateAssociationMixin<ac_ledger>;
  removeAc_ledger!: Sequelize.HasManyRemoveAssociationMixin<ac_ledger, ac_ledgerId>;
  removeAc_ledgers!: Sequelize.HasManyRemoveAssociationsMixin<ac_ledger, ac_ledgerId>;
  hasAc_ledger!: Sequelize.HasManyHasAssociationMixin<ac_ledger, ac_ledgerId>;
  hasAc_ledgers!: Sequelize.HasManyHasAssociationsMixin<ac_ledger, ac_ledgerId>;
  countAc_ledgers!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany ac_ledger via comtype
  comtype_ac_ledgers!: ac_ledger[];
  getComtype_ac_ledgers!: Sequelize.HasManyGetAssociationsMixin<ac_ledger>;
  setComtype_ac_ledgers!: Sequelize.HasManySetAssociationsMixin<ac_ledger, ac_ledgerId>;
  addComtype_ac_ledger!: Sequelize.HasManyAddAssociationMixin<ac_ledger, ac_ledgerId>;
  addComtype_ac_ledgers!: Sequelize.HasManyAddAssociationsMixin<ac_ledger, ac_ledgerId>;
  createComtype_ac_ledger!: Sequelize.HasManyCreateAssociationMixin<ac_ledger>;
  removeComtype_ac_ledger!: Sequelize.HasManyRemoveAssociationMixin<ac_ledger, ac_ledgerId>;
  removeComtype_ac_ledgers!: Sequelize.HasManyRemoveAssociationsMixin<ac_ledger, ac_ledgerId>;
  hasComtype_ac_ledger!: Sequelize.HasManyHasAssociationMixin<ac_ledger, ac_ledgerId>;
  hasComtype_ac_ledgers!: Sequelize.HasManyHasAssociationsMixin<ac_ledger, ac_ledgerId>;
  countComtype_ac_ledgers!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_detail via tailor_ac
  billing_details!: billing_detail[];
  getBilling_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setBilling_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addBilling_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addBilling_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createBilling_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeBilling_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeBilling_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasBilling_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasBilling_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countBilling_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_detail via debit_Ac
  debit_Ac_billing_details!: billing_detail[];
  getDebit_Ac_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setDebit_Ac_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addDebit_Ac_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addDebit_Ac_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createDebit_Ac_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeDebit_Ac_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeDebit_Ac_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasDebit_Ac_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasDebit_Ac_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countDebit_Ac_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_detail via credit_Ac
  credit_Ac_billing_details!: billing_detail[];
  getCredit_Ac_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setCredit_Ac_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addCredit_Ac_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addCredit_Ac_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createCredit_Ac_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeCredit_Ac_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeCredit_Ac_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasCredit_Ac_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasCredit_Ac_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countCredit_Ac_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via party_ac
  billing_masters!: billing_master[];
  getBilling_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setBilling_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addBilling_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addBilling_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createBilling_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeBilling_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeBilling_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasBilling_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasBilling_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countBilling_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via dr_cr_ac
  dr_cr_ac_billing_masters!: billing_master[];
  getDr_cr_ac_billing_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setDr_cr_ac_billing_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addDr_cr_ac_billing_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addDr_cr_ac_billing_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createDr_cr_ac_billing_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeDr_cr_ac_billing_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeDr_cr_ac_billing_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasDr_cr_ac_billing_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasDr_cr_ac_billing_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countDr_cr_ac_billing_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via gst_ac
  gst_ac_billing_masters!: billing_master[];
  getGst_ac_billing_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setGst_ac_billing_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addGst_ac_billing_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addGst_ac_billing_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createGst_ac_billing_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeGst_ac_billing_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeGst_ac_billing_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasGst_ac_billing_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasGst_ac_billing_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countGst_ac_billing_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via sed_ac
  sed_ac_billing_masters!: billing_master[];
  getSed_ac_billing_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setSed_ac_billing_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addSed_ac_billing_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addSed_ac_billing_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createSed_ac_billing_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeSed_ac_billing_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeSed_ac_billing_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasSed_ac_billing_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasSed_ac_billing_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countSed_ac_billing_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via Transporter
  Transporter_billing_masters!: billing_master[];
  getTransporter_billing_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setTransporter_billing_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addTransporter_billing_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addTransporter_billing_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createTransporter_billing_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeTransporter_billing_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeTransporter_billing_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasTransporter_billing_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasTransporter_billing_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countTransporter_billing_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany billing_master via dincentac
  dincentac_billing_masters!: billing_master[];
  getDincentac_billing_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setDincentac_billing_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addDincentac_billing_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addDincentac_billing_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createDincentac_billing_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeDincentac_billing_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeDincentac_billing_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasDincentac_billing_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasDincentac_billing_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countDincentac_billing_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany companysetup via transporter
  companysetups!: companysetup[];
  getCompanysetups!: Sequelize.HasManyGetAssociationsMixin<companysetup>;
  setCompanysetups!: Sequelize.HasManySetAssociationsMixin<companysetup, companysetupId>;
  addCompanysetup!: Sequelize.HasManyAddAssociationMixin<companysetup, companysetupId>;
  addCompanysetups!: Sequelize.HasManyAddAssociationsMixin<companysetup, companysetupId>;
  createCompanysetup!: Sequelize.HasManyCreateAssociationMixin<companysetup>;
  removeCompanysetup!: Sequelize.HasManyRemoveAssociationMixin<companysetup, companysetupId>;
  removeCompanysetups!: Sequelize.HasManyRemoveAssociationsMixin<companysetup, companysetupId>;
  hasCompanysetup!: Sequelize.HasManyHasAssociationMixin<companysetup, companysetupId>;
  hasCompanysetups!: Sequelize.HasManyHasAssociationsMixin<companysetup, companysetupId>;
  countCompanysetups!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany companysetup via sol_comm
  sol_comm_companysetups!: companysetup[];
  getSol_comm_companysetups!: Sequelize.HasManyGetAssociationsMixin<companysetup>;
  setSol_comm_companysetups!: Sequelize.HasManySetAssociationsMixin<companysetup, companysetupId>;
  addSol_comm_companysetup!: Sequelize.HasManyAddAssociationMixin<companysetup, companysetupId>;
  addSol_comm_companysetups!: Sequelize.HasManyAddAssociationsMixin<companysetup, companysetupId>;
  createSol_comm_companysetup!: Sequelize.HasManyCreateAssociationMixin<companysetup>;
  removeSol_comm_companysetup!: Sequelize.HasManyRemoveAssociationMixin<companysetup, companysetupId>;
  removeSol_comm_companysetups!: Sequelize.HasManyRemoveAssociationsMixin<companysetup, companysetupId>;
  hasSol_comm_companysetup!: Sequelize.HasManyHasAssociationMixin<companysetup, companysetupId>;
  hasSol_comm_companysetups!: Sequelize.HasManyHasAssociationsMixin<companysetup, companysetupId>;
  countSol_comm_companysetups!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany companysetup via os_bilty
  os_bilty_companysetups!: companysetup[];
  getOs_bilty_companysetups!: Sequelize.HasManyGetAssociationsMixin<companysetup>;
  setOs_bilty_companysetups!: Sequelize.HasManySetAssociationsMixin<companysetup, companysetupId>;
  addOs_bilty_companysetup!: Sequelize.HasManyAddAssociationMixin<companysetup, companysetupId>;
  addOs_bilty_companysetups!: Sequelize.HasManyAddAssociationsMixin<companysetup, companysetupId>;
  createOs_bilty_companysetup!: Sequelize.HasManyCreateAssociationMixin<companysetup>;
  removeOs_bilty_companysetup!: Sequelize.HasManyRemoveAssociationMixin<companysetup, companysetupId>;
  removeOs_bilty_companysetups!: Sequelize.HasManyRemoveAssociationsMixin<companysetup, companysetupId>;
  hasOs_bilty_companysetup!: Sequelize.HasManyHasAssociationMixin<companysetup, companysetupId>;
  hasOs_bilty_companysetups!: Sequelize.HasManyHasAssociationsMixin<companysetup, companysetupId>;
  countOs_bilty_companysetups!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany fin_bal1 via ac_acode
  fin_bal1s!: fin_bal1[];
  getFin_bal1s!: Sequelize.HasManyGetAssociationsMixin<fin_bal1>;
  setFin_bal1s!: Sequelize.HasManySetAssociationsMixin<fin_bal1, fin_bal1Id>;
  addFin_bal1!: Sequelize.HasManyAddAssociationMixin<fin_bal1, fin_bal1Id>;
  addFin_bal1s!: Sequelize.HasManyAddAssociationsMixin<fin_bal1, fin_bal1Id>;
  createFin_bal1!: Sequelize.HasManyCreateAssociationMixin<fin_bal1>;
  removeFin_bal1!: Sequelize.HasManyRemoveAssociationMixin<fin_bal1, fin_bal1Id>;
  removeFin_bal1s!: Sequelize.HasManyRemoveAssociationsMixin<fin_bal1, fin_bal1Id>;
  hasFin_bal1!: Sequelize.HasManyHasAssociationMixin<fin_bal1, fin_bal1Id>;
  hasFin_bal1s!: Sequelize.HasManyHasAssociationsMixin<fin_bal1, fin_bal1Id>;
  countFin_bal1s!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany fin_bal2 via ac_acode
  fin_bal2s!: fin_bal2[];
  getFin_bal2s!: Sequelize.HasManyGetAssociationsMixin<fin_bal2>;
  setFin_bal2s!: Sequelize.HasManySetAssociationsMixin<fin_bal2, fin_bal2Id>;
  addFin_bal2!: Sequelize.HasManyAddAssociationMixin<fin_bal2, fin_bal2Id>;
  addFin_bal2s!: Sequelize.HasManyAddAssociationsMixin<fin_bal2, fin_bal2Id>;
  createFin_bal2!: Sequelize.HasManyCreateAssociationMixin<fin_bal2>;
  removeFin_bal2!: Sequelize.HasManyRemoveAssociationMixin<fin_bal2, fin_bal2Id>;
  removeFin_bal2s!: Sequelize.HasManyRemoveAssociationsMixin<fin_bal2, fin_bal2Id>;
  hasFin_bal2!: Sequelize.HasManyHasAssociationMixin<fin_bal2, fin_bal2Id>;
  hasFin_bal2s!: Sequelize.HasManyHasAssociationsMixin<fin_bal2, fin_bal2Id>;
  countFin_bal2s!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany fin_notes_detail via ac_acode
  fin_notes_details!: fin_notes_detail[];
  getFin_notes_details!: Sequelize.HasManyGetAssociationsMixin<fin_notes_detail>;
  setFin_notes_details!: Sequelize.HasManySetAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  addFin_notes_detail!: Sequelize.HasManyAddAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  addFin_notes_details!: Sequelize.HasManyAddAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  createFin_notes_detail!: Sequelize.HasManyCreateAssociationMixin<fin_notes_detail>;
  removeFin_notes_detail!: Sequelize.HasManyRemoveAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  removeFin_notes_details!: Sequelize.HasManyRemoveAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  hasFin_notes_detail!: Sequelize.HasManyHasAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  hasFin_notes_details!: Sequelize.HasManyHasAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  countFin_notes_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany fin_pl via ac_acode
  fin_pls!: fin_pl[];
  getFin_pls!: Sequelize.HasManyGetAssociationsMixin<fin_pl>;
  setFin_pls!: Sequelize.HasManySetAssociationsMixin<fin_pl, fin_plId>;
  addFin_pl!: Sequelize.HasManyAddAssociationMixin<fin_pl, fin_plId>;
  addFin_pls!: Sequelize.HasManyAddAssociationsMixin<fin_pl, fin_plId>;
  createFin_pl!: Sequelize.HasManyCreateAssociationMixin<fin_pl>;
  removeFin_pl!: Sequelize.HasManyRemoveAssociationMixin<fin_pl, fin_plId>;
  removeFin_pls!: Sequelize.HasManyRemoveAssociationsMixin<fin_pl, fin_plId>;
  hasFin_pl!: Sequelize.HasManyHasAssociationMixin<fin_pl, fin_plId>;
  hasFin_pls!: Sequelize.HasManyHasAssociationsMixin<fin_pl, fin_plId>;
  countFin_pls!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany order_master via party_ac
  order_masters!: order_master[];
  getOrder_masters!: Sequelize.HasManyGetAssociationsMixin<order_master>;
  setOrder_masters!: Sequelize.HasManySetAssociationsMixin<order_master, order_masterId>;
  addOrder_master!: Sequelize.HasManyAddAssociationMixin<order_master, order_masterId>;
  addOrder_masters!: Sequelize.HasManyAddAssociationsMixin<order_master, order_masterId>;
  createOrder_master!: Sequelize.HasManyCreateAssociationMixin<order_master>;
  removeOrder_master!: Sequelize.HasManyRemoveAssociationMixin<order_master, order_masterId>;
  removeOrder_masters!: Sequelize.HasManyRemoveAssociationsMixin<order_master, order_masterId>;
  hasOrder_master!: Sequelize.HasManyHasAssociationMixin<order_master, order_masterId>;
  hasOrder_masters!: Sequelize.HasManyHasAssociationsMixin<order_master, order_masterId>;
  countOrder_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany order_master via Transporter
  Transporter_order_masters!: order_master[];
  getTransporter_order_masters!: Sequelize.HasManyGetAssociationsMixin<order_master>;
  setTransporter_order_masters!: Sequelize.HasManySetAssociationsMixin<order_master, order_masterId>;
  addTransporter_order_master!: Sequelize.HasManyAddAssociationMixin<order_master, order_masterId>;
  addTransporter_order_masters!: Sequelize.HasManyAddAssociationsMixin<order_master, order_masterId>;
  createTransporter_order_master!: Sequelize.HasManyCreateAssociationMixin<order_master>;
  removeTransporter_order_master!: Sequelize.HasManyRemoveAssociationMixin<order_master, order_masterId>;
  removeTransporter_order_masters!: Sequelize.HasManyRemoveAssociationsMixin<order_master, order_masterId>;
  hasTransporter_order_master!: Sequelize.HasManyHasAssociationMixin<order_master, order_masterId>;
  hasTransporter_order_masters!: Sequelize.HasManyHasAssociationsMixin<order_master, order_masterId>;
  countTransporter_order_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany order_master via salesman
  salesman_order_masters!: order_master[];
  getSalesman_order_masters!: Sequelize.HasManyGetAssociationsMixin<order_master>;
  setSalesman_order_masters!: Sequelize.HasManySetAssociationsMixin<order_master, order_masterId>;
  addSalesman_order_master!: Sequelize.HasManyAddAssociationMixin<order_master, order_masterId>;
  addSalesman_order_masters!: Sequelize.HasManyAddAssociationsMixin<order_master, order_masterId>;
  createSalesman_order_master!: Sequelize.HasManyCreateAssociationMixin<order_master>;
  removeSalesman_order_master!: Sequelize.HasManyRemoveAssociationMixin<order_master, order_masterId>;
  removeSalesman_order_masters!: Sequelize.HasManyRemoveAssociationsMixin<order_master, order_masterId>;
  hasSalesman_order_master!: Sequelize.HasManyHasAssociationMixin<order_master, order_masterId>;
  hasSalesman_order_masters!: Sequelize.HasManyHasAssociationsMixin<order_master, order_masterId>;
  countSalesman_order_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany payreq_detail via party
  payreq_details!: payreq_detail[];
  getPayreq_details!: Sequelize.HasManyGetAssociationsMixin<payreq_detail>;
  setPayreq_details!: Sequelize.HasManySetAssociationsMixin<payreq_detail, payreq_detailId>;
  addPayreq_detail!: Sequelize.HasManyAddAssociationMixin<payreq_detail, payreq_detailId>;
  addPayreq_details!: Sequelize.HasManyAddAssociationsMixin<payreq_detail, payreq_detailId>;
  createPayreq_detail!: Sequelize.HasManyCreateAssociationMixin<payreq_detail>;
  removePayreq_detail!: Sequelize.HasManyRemoveAssociationMixin<payreq_detail, payreq_detailId>;
  removePayreq_details!: Sequelize.HasManyRemoveAssociationsMixin<payreq_detail, payreq_detailId>;
  hasPayreq_detail!: Sequelize.HasManyHasAssociationMixin<payreq_detail, payreq_detailId>;
  hasPayreq_details!: Sequelize.HasManyHasAssociationsMixin<payreq_detail, payreq_detailId>;
  countPayreq_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany stock via party
  stocks!: stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<stock, stockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<stock, stockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<stock, stockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<stock, stockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<stock, stockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<stock, stockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<stock, stockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany voucher_detail via acode
  voucher_details!: voucher_detail[];
  getVoucher_details!: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
  setVoucher_details!: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
  addVoucher_detail!: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
  addVoucher_details!: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
  createVoucher_detail!: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
  removeVoucher_detail!: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
  removeVoucher_details!: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
  hasVoucher_detail!: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
  hasVoucher_details!: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
  countVoucher_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany voucher_detail via comtype
  comtype_voucher_details!: voucher_detail[];
  getComtype_voucher_details!: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
  setComtype_voucher_details!: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
  addComtype_voucher_detail!: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
  addComtype_voucher_details!: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
  createComtype_voucher_detail!: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
  removeComtype_voucher_detail!: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
  removeComtype_voucher_details!: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
  hasComtype_voucher_detail!: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
  hasComtype_voucher_details!: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
  countComtype_voucher_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany voucher_detail via itax_acode
  itax_acode_voucher_details!: voucher_detail[];
  getItax_acode_voucher_details!: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
  setItax_acode_voucher_details!: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
  addItax_acode_voucher_detail!: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
  addItax_acode_voucher_details!: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
  createItax_acode_voucher_detail!: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
  removeItax_acode_voucher_detail!: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
  removeItax_acode_voucher_details!: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
  hasItax_acode_voucher_detail!: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
  hasItax_acode_voucher_details!: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
  countItax_acode_voucher_details!: Sequelize.HasManyCountAssociationsMixin;
  // ac hasMany voucher_master via mainacode
  voucher_masters!: voucher_master[];
  getVoucher_masters!: Sequelize.HasManyGetAssociationsMixin<voucher_master>;
  setVoucher_masters!: Sequelize.HasManySetAssociationsMixin<voucher_master, voucher_masterId>;
  addVoucher_master!: Sequelize.HasManyAddAssociationMixin<voucher_master, voucher_masterId>;
  addVoucher_masters!: Sequelize.HasManyAddAssociationsMixin<voucher_master, voucher_masterId>;
  createVoucher_master!: Sequelize.HasManyCreateAssociationMixin<voucher_master>;
  removeVoucher_master!: Sequelize.HasManyRemoveAssociationMixin<voucher_master, voucher_masterId>;
  removeVoucher_masters!: Sequelize.HasManyRemoveAssociationsMixin<voucher_master, voucher_masterId>;
  hasVoucher_master!: Sequelize.HasManyHasAssociationMixin<voucher_master, voucher_masterId>;
  hasVoucher_masters!: Sequelize.HasManyHasAssociationsMixin<voucher_master, voucher_masterId>;
  countVoucher_masters!: Sequelize.HasManyCountAssociationsMixin;
  // ac belongsTo city_list via citycode
  citycode_city_list!: city_list;
  getCitycode_city_list!: Sequelize.BelongsToGetAssociationMixin<city_list>;
  setCitycode_city_list!: Sequelize.BelongsToSetAssociationMixin<city_list, city_listId>;
  createCitycode_city_list!: Sequelize.BelongsToCreateAssociationMixin<city_list>;
  // ac belongsTo group_list via groupcode
  groupcode_group_list!: group_list;
  getGroupcode_group_list!: Sequelize.BelongsToGetAssociationMixin<group_list>;
  setGroupcode_group_list!: Sequelize.BelongsToSetAssociationMixin<group_list, group_listId>;
  createGroupcode_group_list!: Sequelize.BelongsToCreateAssociationMixin<group_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ac {
    return ac.init({
    acode: {
      type: DataTypes.CHAR(24),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    clevel: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    parent: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    stregno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ntnno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastbal: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    cash_bank: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    aging: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    old_acode: {
      type: DataTypes.CHAR(24),
      allowNull: true
    },
    parentsname: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    Credit_Days: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    vehicleno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    emboss_line: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    transporter: {
      type: DataTypes.CHAR(24),
      allowNull: true
    },
    sol_com: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    osb_com: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    cr_limit: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    contactperson: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telno: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    Show_in_Aging: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    depart1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_person1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_mobile1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    depart2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_person2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_mobile2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    depart3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_person3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contact_mobile3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lockuser: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    citycode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'city_list',
        key: 'code'
      }
    },
    groupcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'group_list',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'ac',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "acode" },
        ]
      },
      {
        name: "IX_ac",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "IX_ac_1",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
      {
        name: "IX_ac_2",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "IX_ac_3",
        using: "BTREE",
        fields: [
          { name: "transporter" },
        ]
      },
      {
        name: "IX_ac_4",
        using: "BTREE",
        fields: [
          { name: "citycode" },
        ]
      },
      {
        name: "IX_ac_5",
        using: "BTREE",
        fields: [
          { name: "groupcode" },
        ]
      },
    ]
  });
  }
}
