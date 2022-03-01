import type { Sequelize } from "sequelize";
import { ac as _ac } from "./ac";
import type { acAttributes, acCreationAttributes } from "./ac";
import { ac_comments as _ac_comments } from "./ac_comments";
import type { ac_commentsAttributes, ac_commentsCreationAttributes } from "./ac_comments";
import { ac_ledger as _ac_ledger } from "./ac_ledger";
import type { ac_ledgerAttributes, ac_ledgerCreationAttributes } from "./ac_ledger";
import { assembling_list as _assembling_list } from "./assembling_list";
import type { assembling_listAttributes, assembling_listCreationAttributes } from "./assembling_list";
import { billing_detail as _billing_detail } from "./billing_detail";
import type { billing_detailAttributes, billing_detailCreationAttributes } from "./billing_detail";
import { billing_master as _billing_master } from "./billing_master";
import type { billing_masterAttributes, billing_masterCreationAttributes } from "./billing_master";
import { city_list as _city_list } from "./city_list";
import type { city_listAttributes, city_listCreationAttributes } from "./city_list";
import { companysetup as _companysetup } from "./companysetup";
import type { companysetupAttributes, companysetupCreationAttributes } from "./companysetup";
import { consumption_detail as _consumption_detail } from "./consumption_detail";
import type { consumption_detailAttributes, consumption_detailCreationAttributes } from "./consumption_detail";
import { fin_ac as _fin_ac } from "./fin_ac";
import type { fin_acAttributes, fin_acCreationAttributes } from "./fin_ac";
import { fin_bal1 as _fin_bal1 } from "./fin_bal1";
import type { fin_bal1Attributes, fin_bal1CreationAttributes } from "./fin_bal1";
import { fin_bal2 as _fin_bal2 } from "./fin_bal2";
import type { fin_bal2Attributes, fin_bal2CreationAttributes } from "./fin_bal2";
import { fin_notes_detail as _fin_notes_detail } from "./fin_notes_detail";
import type { fin_notes_detailAttributes, fin_notes_detailCreationAttributes } from "./fin_notes_detail";
import { fin_notes_master as _fin_notes_master } from "./fin_notes_master";
import type { fin_notes_masterAttributes, fin_notes_masterCreationAttributes } from "./fin_notes_master";
import { fin_pl as _fin_pl } from "./fin_pl";
import type { fin_plAttributes, fin_plCreationAttributes } from "./fin_pl";
import { group_list as _group_list } from "./group_list";
import type { group_listAttributes, group_listCreationAttributes } from "./group_list";
import { itembrandlist as _itembrandlist } from "./itembrandlist";
import type { itembrandlistAttributes, itembrandlistCreationAttributes } from "./itembrandlist";
import { itemcat as _itemcat } from "./itemcat";
import type { itemcatAttributes, itemcatCreationAttributes } from "./itemcat";
import { itemsubcatlist as _itemsubcatlist } from "./itemsubcatlist";
import type { itemsubcatlistAttributes, itemsubcatlistCreationAttributes } from "./itemsubcatlist";
import { itemtype as _itemtype } from "./itemtype";
import type { itemtypeAttributes, itemtypeCreationAttributes } from "./itemtype";
import { module_log as _module_log } from "./module_log";
import type { module_logAttributes, module_logCreationAttributes } from "./module_log";
import { modulelist as _modulelist } from "./modulelist";
import type { modulelistAttributes, modulelistCreationAttributes } from "./modulelist";
import { order_detail as _order_detail } from "./order_detail";
import type { order_detailAttributes, order_detailCreationAttributes } from "./order_detail";
import { order_master as _order_master } from "./order_master";
import type { order_masterAttributes, order_masterCreationAttributes } from "./order_master";
import { payreq_detail as _payreq_detail } from "./payreq_detail";
import type { payreq_detailAttributes, payreq_detailCreationAttributes } from "./payreq_detail";
import { payreq_master as _payreq_master } from "./payreq_master";
import type { payreq_masterAttributes, payreq_masterCreationAttributes } from "./payreq_master";
import { post as _post } from "./post";
import type { postAttributes, postCreationAttributes } from "./post";
import { price_circular_detail as _price_circular_detail } from "./price_circular_detail";
import type { price_circular_detailAttributes, price_circular_detailCreationAttributes } from "./price_circular_detail";
import { price_circular_master as _price_circular_master } from "./price_circular_master";
import type { price_circular_masterAttributes, price_circular_masterCreationAttributes } from "./price_circular_master";
import { product as _product } from "./product";
import type { productAttributes, productCreationAttributes } from "./product";
import { product_docs as _product_docs } from "./product_docs";
import type { product_docsAttributes, product_docsCreationAttributes } from "./product_docs";
import { return_type_list as _return_type_list } from "./return_type_list";
import type { return_type_listAttributes, return_type_listCreationAttributes } from "./return_type_list";
import { role_detail as _role_detail } from "./role_detail";
import type { role_detailAttributes, role_detailCreationAttributes } from "./role_detail";
import { role_master as _role_master } from "./role_master";
import type { role_masterAttributes, role_masterCreationAttributes } from "./role_master";
import { stock as _stock } from "./stock";
import type { stockAttributes, stockCreationAttributes } from "./stock";
import { sysdiagrams as _sysdiagrams } from "./sysdiagrams";
import type { sysdiagramsAttributes, sysdiagramsCreationAttributes } from "./sysdiagrams";
import { table_id_no as _table_id_no } from "./table_id_no";
import type { table_id_noAttributes, table_id_noCreationAttributes } from "./table_id_no";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { voucher_detail as _voucher_detail } from "./voucher_detail";
import type { voucher_detailAttributes, voucher_detailCreationAttributes } from "./voucher_detail";
import { voucher_master as _voucher_master } from "./voucher_master";
import type { voucher_masterAttributes, voucher_masterCreationAttributes } from "./voucher_master";
import { warehouse_list as _warehouse_list } from "./warehouse_list";
import type { warehouse_listAttributes, warehouse_listCreationAttributes } from "./warehouse_list";

export {
  _ac as ac,
  _ac_comments as ac_comments,
  _ac_ledger as ac_ledger,
  _assembling_list as assembling_list,
  _billing_detail as billing_detail,
  _billing_master as billing_master,
  _city_list as city_list,
  _companysetup as companysetup,
  _consumption_detail as consumption_detail,
  _fin_ac as fin_ac,
  _fin_bal1 as fin_bal1,
  _fin_bal2 as fin_bal2,
  _fin_notes_detail as fin_notes_detail,
  _fin_notes_master as fin_notes_master,
  _fin_pl as fin_pl,
  _group_list as group_list,
  _itembrandlist as itembrandlist,
  _itemcat as itemcat,
  _itemsubcatlist as itemsubcatlist,
  _itemtype as itemtype,
  _module_log as module_log,
  _modulelist as modulelist,
  _order_detail as order_detail,
  _order_master as order_master,
  _payreq_detail as payreq_detail,
  _payreq_master as payreq_master,
  _post as post,
  _price_circular_detail as price_circular_detail,
  _price_circular_master as price_circular_master,
  _product as product,
  _product_docs as product_docs,
  _return_type_list as return_type_list,
  _role_detail as role_detail,
  _role_master as role_master,
  _stock as stock,
  _sysdiagrams as sysdiagrams,
  _table_id_no as table_id_no,
  _user as user,
  _users as users,
  _voucher_detail as voucher_detail,
  _voucher_master as voucher_master,
  _warehouse_list as warehouse_list,
};

export type {
  acAttributes,
  acCreationAttributes,
  ac_commentsAttributes,
  ac_commentsCreationAttributes,
  ac_ledgerAttributes,
  ac_ledgerCreationAttributes,
  assembling_listAttributes,
  assembling_listCreationAttributes,
  billing_detailAttributes,
  billing_detailCreationAttributes,
  billing_masterAttributes,
  billing_masterCreationAttributes,
  city_listAttributes,
  city_listCreationAttributes,
  companysetupAttributes,
  companysetupCreationAttributes,
  consumption_detailAttributes,
  consumption_detailCreationAttributes,
  fin_acAttributes,
  fin_acCreationAttributes,
  fin_bal1Attributes,
  fin_bal1CreationAttributes,
  fin_bal2Attributes,
  fin_bal2CreationAttributes,
  fin_notes_detailAttributes,
  fin_notes_detailCreationAttributes,
  fin_notes_masterAttributes,
  fin_notes_masterCreationAttributes,
  fin_plAttributes,
  fin_plCreationAttributes,
  group_listAttributes,
  group_listCreationAttributes,
  itembrandlistAttributes,
  itembrandlistCreationAttributes,
  itemcatAttributes,
  itemcatCreationAttributes,
  itemsubcatlistAttributes,
  itemsubcatlistCreationAttributes,
  itemtypeAttributes,
  itemtypeCreationAttributes,
  module_logAttributes,
  module_logCreationAttributes,
  modulelistAttributes,
  modulelistCreationAttributes,
  order_detailAttributes,
  order_detailCreationAttributes,
  order_masterAttributes,
  order_masterCreationAttributes,
  payreq_detailAttributes,
  payreq_detailCreationAttributes,
  payreq_masterAttributes,
  payreq_masterCreationAttributes,
  postAttributes,
  postCreationAttributes,
  price_circular_detailAttributes,
  price_circular_detailCreationAttributes,
  price_circular_masterAttributes,
  price_circular_masterCreationAttributes,
  productAttributes,
  productCreationAttributes,
  product_docsAttributes,
  product_docsCreationAttributes,
  return_type_listAttributes,
  return_type_listCreationAttributes,
  role_detailAttributes,
  role_detailCreationAttributes,
  role_masterAttributes,
  role_masterCreationAttributes,
  stockAttributes,
  stockCreationAttributes,
  sysdiagramsAttributes,
  sysdiagramsCreationAttributes,
  table_id_noAttributes,
  table_id_noCreationAttributes,
  userAttributes,
  userCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  voucher_detailAttributes,
  voucher_detailCreationAttributes,
  voucher_masterAttributes,
  voucher_masterCreationAttributes,
  warehouse_listAttributes,
  warehouse_listCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const ac = _ac.initModel(sequelize);
  const ac_comments = _ac_comments.initModel(sequelize);
  const ac_ledger = _ac_ledger.initModel(sequelize);
  const assembling_list = _assembling_list.initModel(sequelize);
  const billing_detail = _billing_detail.initModel(sequelize);
  const billing_master = _billing_master.initModel(sequelize);
  const city_list = _city_list.initModel(sequelize);
  const companysetup = _companysetup.initModel(sequelize);
  const consumption_detail = _consumption_detail.initModel(sequelize);
  const fin_ac = _fin_ac.initModel(sequelize);
  const fin_bal1 = _fin_bal1.initModel(sequelize);
  const fin_bal2 = _fin_bal2.initModel(sequelize);
  const fin_notes_detail = _fin_notes_detail.initModel(sequelize);
  const fin_notes_master = _fin_notes_master.initModel(sequelize);
  const fin_pl = _fin_pl.initModel(sequelize);
  const group_list = _group_list.initModel(sequelize);
  const itembrandlist = _itembrandlist.initModel(sequelize);
  const itemcat = _itemcat.initModel(sequelize);
  const itemsubcatlist = _itemsubcatlist.initModel(sequelize);
  const itemtype = _itemtype.initModel(sequelize);
  const module_log = _module_log.initModel(sequelize);
  const modulelist = _modulelist.initModel(sequelize);
  const order_detail = _order_detail.initModel(sequelize);
  const order_master = _order_master.initModel(sequelize);
  const payreq_detail = _payreq_detail.initModel(sequelize);
  const payreq_master = _payreq_master.initModel(sequelize);
  const post = _post.initModel(sequelize);
  const price_circular_detail = _price_circular_detail.initModel(sequelize);
  const price_circular_master = _price_circular_master.initModel(sequelize);
  const product = _product.initModel(sequelize);
  const product_docs = _product_docs.initModel(sequelize);
  const return_type_list = _return_type_list.initModel(sequelize);
  const role_detail = _role_detail.initModel(sequelize);
  const role_master = _role_master.initModel(sequelize);
  const stock = _stock.initModel(sequelize);
  const sysdiagrams = _sysdiagrams.initModel(sequelize);
  const table_id_no = _table_id_no.initModel(sequelize);
  const user = _user.initModel(sequelize);
  const users = _users.initModel(sequelize);
  const voucher_detail = _voucher_detail.initModel(sequelize);
  const voucher_master = _voucher_master.initModel(sequelize);
  const warehouse_list = _warehouse_list.initModel(sequelize);

  ac.belongsTo(ac, { as: "parent_ac", foreignKey: "parent"});
  ac.hasMany(ac, { as: "acs", foreignKey: "parent"});
  ac_comments.belongsTo(ac, { as: "acode_ac", foreignKey: "acode"});
  ac.hasMany(ac_comments, { as: "ac_comments", foreignKey: "acode"});
  ac_ledger.belongsTo(ac, { as: "acode_ac", foreignKey: "acode"});
  ac.hasMany(ac_ledger, { as: "ac_ledgers", foreignKey: "acode"});
  ac_ledger.belongsTo(ac, { as: "comtype_ac", foreignKey: "comtype"});
  ac.hasMany(ac_ledger, { as: "comtype_ac_ledgers", foreignKey: "comtype"});
  billing_detail.belongsTo(ac, { as: "tailor_ac_ac", foreignKey: "tailor_ac"});
  ac.hasMany(billing_detail, { as: "billing_details", foreignKey: "tailor_ac"});
  billing_detail.belongsTo(ac, { as: "debit_Ac_ac", foreignKey: "debit_Ac"});
  ac.hasMany(billing_detail, { as: "debit_Ac_billing_details", foreignKey: "debit_Ac"});
  billing_detail.belongsTo(ac, { as: "credit_Ac_ac", foreignKey: "credit_Ac"});
  ac.hasMany(billing_detail, { as: "credit_Ac_billing_details", foreignKey: "credit_Ac"});
  billing_master.belongsTo(ac, { as: "party_ac_ac", foreignKey: "party_ac"});
  ac.hasMany(billing_master, { as: "billing_masters", foreignKey: "party_ac"});
  billing_master.belongsTo(ac, { as: "dr_cr_ac_ac", foreignKey: "dr_cr_ac"});
  ac.hasMany(billing_master, { as: "dr_cr_ac_billing_masters", foreignKey: "dr_cr_ac"});
  billing_master.belongsTo(ac, { as: "gst_ac_ac", foreignKey: "gst_ac"});
  ac.hasMany(billing_master, { as: "gst_ac_billing_masters", foreignKey: "gst_ac"});
  billing_master.belongsTo(ac, { as: "sed_ac_ac", foreignKey: "sed_ac"});
  ac.hasMany(billing_master, { as: "sed_ac_billing_masters", foreignKey: "sed_ac"});
  billing_master.belongsTo(ac, { as: "Transporter_ac", foreignKey: "Transporter"});
  ac.hasMany(billing_master, { as: "Transporter_billing_masters", foreignKey: "Transporter"});
  billing_master.belongsTo(ac, { as: "dincentac_ac", foreignKey: "dincentac"});
  ac.hasMany(billing_master, { as: "dincentac_billing_masters", foreignKey: "dincentac"});
  companysetup.belongsTo(ac, { as: "transporter_ac", foreignKey: "transporter"});
  ac.hasMany(companysetup, { as: "companysetups", foreignKey: "transporter"});
  companysetup.belongsTo(ac, { as: "sol_comm_ac", foreignKey: "sol_comm"});
  ac.hasMany(companysetup, { as: "sol_comm_companysetups", foreignKey: "sol_comm"});
  companysetup.belongsTo(ac, { as: "os_bilty_ac", foreignKey: "os_bilty"});
  ac.hasMany(companysetup, { as: "os_bilty_companysetups", foreignKey: "os_bilty"});
  fin_bal1.belongsTo(ac, { as: "ac_acode_ac", foreignKey: "ac_acode"});
  ac.hasMany(fin_bal1, { as: "fin_bal1s", foreignKey: "ac_acode"});
  fin_bal2.belongsTo(ac, { as: "ac_acode_ac", foreignKey: "ac_acode"});
  ac.hasMany(fin_bal2, { as: "fin_bal2s", foreignKey: "ac_acode"});
  fin_notes_detail.belongsTo(ac, { as: "ac_acode_ac", foreignKey: "ac_acode"});
  ac.hasMany(fin_notes_detail, { as: "fin_notes_details", foreignKey: "ac_acode"});
  fin_pl.belongsTo(ac, { as: "ac_acode_ac", foreignKey: "ac_acode"});
  ac.hasMany(fin_pl, { as: "fin_pls", foreignKey: "ac_acode"});
  order_master.belongsTo(ac, { as: "party_ac_ac", foreignKey: "party_ac"});
  ac.hasMany(order_master, { as: "order_masters", foreignKey: "party_ac"});
  order_master.belongsTo(ac, { as: "Transporter_ac", foreignKey: "Transporter"});
  ac.hasMany(order_master, { as: "Transporter_order_masters", foreignKey: "Transporter"});
  order_master.belongsTo(ac, { as: "salesman_ac", foreignKey: "salesman"});
  ac.hasMany(order_master, { as: "salesman_order_masters", foreignKey: "salesman"});
  payreq_detail.belongsTo(ac, { as: "party_ac", foreignKey: "party"});
  ac.hasMany(payreq_detail, { as: "payreq_details", foreignKey: "party"});
  stock.belongsTo(ac, { as: "party_ac", foreignKey: "party"});
  ac.hasMany(stock, { as: "stocks", foreignKey: "party"});
  voucher_detail.belongsTo(ac, { as: "acode_ac", foreignKey: "acode"});
  ac.hasMany(voucher_detail, { as: "voucher_details", foreignKey: "acode"});
  voucher_detail.belongsTo(ac, { as: "comtype_ac", foreignKey: "comtype"});
  ac.hasMany(voucher_detail, { as: "comtype_voucher_details", foreignKey: "comtype"});
  voucher_detail.belongsTo(ac, { as: "itax_acode_ac", foreignKey: "itax_acode"});
  ac.hasMany(voucher_detail, { as: "itax_acode_voucher_details", foreignKey: "itax_acode"});
  voucher_master.belongsTo(ac, { as: "mainacode_ac", foreignKey: "mainacode"});
  ac.hasMany(voucher_master, { as: "voucher_masters", foreignKey: "mainacode"});
  billing_detail.belongsTo(billing_master, { as: "pidno_billing_master", foreignKey: "pidno"});
  billing_master.hasMany(billing_detail, { as: "billing_details", foreignKey: "pidno"});
  ac.belongsTo(city_list, { as: "citycode_city_list", foreignKey: "citycode"});
  city_list.hasMany(ac, { as: "acs", foreignKey: "citycode"});
  fin_bal1.belongsTo(fin_ac, { as: "fin_acode_fin_ac", foreignKey: "fin_acode"});
  fin_ac.hasMany(fin_bal1, { as: "fin_bal1s", foreignKey: "fin_acode"});
  fin_bal2.belongsTo(fin_ac, { as: "fin_acode_fin_ac", foreignKey: "fin_acode"});
  fin_ac.hasMany(fin_bal2, { as: "fin_bal2s", foreignKey: "fin_acode"});
  fin_notes_detail.belongsTo(fin_ac, { as: "fin_acode_fin_ac", foreignKey: "fin_acode"});
  fin_ac.hasMany(fin_notes_detail, { as: "fin_notes_details", foreignKey: "fin_acode"});
  fin_pl.belongsTo(fin_ac, { as: "fin_acode_fin_ac", foreignKey: "fin_acode"});
  fin_ac.hasMany(fin_pl, { as: "fin_pls", foreignKey: "fin_acode"});
  fin_bal1.belongsTo(fin_notes_master, { as: "note_no_fin_notes_master", foreignKey: "note_no"});
  fin_notes_master.hasMany(fin_bal1, { as: "fin_bal1s", foreignKey: "note_no"});
  fin_bal2.belongsTo(fin_notes_master, { as: "note_no_fin_notes_master", foreignKey: "note_no"});
  fin_notes_master.hasMany(fin_bal2, { as: "fin_bal2s", foreignKey: "note_no"});
  fin_notes_detail.belongsTo(fin_notes_master, { as: "pidno_fin_notes_master", foreignKey: "pidno"});
  fin_notes_master.hasMany(fin_notes_detail, { as: "fin_notes_details", foreignKey: "pidno"});
  fin_notes_detail.belongsTo(fin_notes_master, { as: "ref_noteno_fin_notes_master", foreignKey: "ref_noteno"});
  fin_notes_master.hasMany(fin_notes_detail, { as: "ref_noteno_fin_notes_details", foreignKey: "ref_noteno"});
  fin_pl.belongsTo(fin_notes_master, { as: "note_no_fin_notes_master", foreignKey: "note_no"});
  fin_notes_master.hasMany(fin_pl, { as: "fin_pls", foreignKey: "note_no"});
  ac.belongsTo(group_list, { as: "groupcode_group_list", foreignKey: "groupcode"});
  group_list.hasMany(ac, { as: "acs", foreignKey: "groupcode"});
  product.belongsTo(itembrandlist, { as: "brand_itembrandlist", foreignKey: "brand"});
  itembrandlist.hasMany(product, { as: "products", foreignKey: "brand"});
  product.belongsTo(itemcat, { as: "itemcat_itemcat", foreignKey: "itemcat"});
  itemcat.hasMany(product, { as: "products", foreignKey: "itemcat"});
  product.belongsTo(itemsubcatlist, { as: "subitemcat_itemsubcatlist", foreignKey: "subitemcat"});
  itemsubcatlist.hasMany(product, { as: "products", foreignKey: "subitemcat"});
  product.belongsTo(itemtype, { as: "itemtype_itemtype", foreignKey: "itemtype"});
  itemtype.hasMany(product, { as: "products", foreignKey: "itemtype"});
  role_detail.belongsTo(modulelist, { as: "moduletype_modulelist", foreignKey: "moduletype"});
  modulelist.hasMany(role_detail, { as: "role_details", foreignKey: "moduletype"});
  order_detail.belongsTo(order_master, { as: "pidno_order_master", foreignKey: "pidno"});
  order_master.hasMany(order_detail, { as: "order_details", foreignKey: "pidno"});
  payreq_detail.belongsTo(payreq_master, { as: "pidno_payreq_master", foreignKey: "pidno"});
  payreq_master.hasMany(payreq_detail, { as: "payreq_details", foreignKey: "pidno"});
  price_circular_detail.belongsTo(price_circular_master, { as: "pidno_price_circular_master", foreignKey: "pidno"});
  price_circular_master.hasMany(price_circular_detail, { as: "price_circular_details", foreignKey: "pidno"});
  assembling_list.belongsTo(product, { as: "mainitemcode_product", foreignKey: "mainitemcode"});
  product.hasMany(assembling_list, { as: "assembling_lists", foreignKey: "mainitemcode"});
  assembling_list.belongsTo(product, { as: "subitemcode_product", foreignKey: "subitemcode"});
  product.hasMany(assembling_list, { as: "subitemcode_assembling_lists", foreignKey: "subitemcode"});
  billing_detail.belongsTo(product, { as: "itemcode_product", foreignKey: "itemcode"});
  product.hasMany(billing_detail, { as: "billing_details", foreignKey: "itemcode"});
  billing_detail.belongsTo(product, { as: "fitemcode_product", foreignKey: "fitemcode"});
  product.hasMany(billing_detail, { as: "fitemcode_billing_details", foreignKey: "fitemcode"});
  billing_master.belongsTo(product, { as: "fitem_code_product", foreignKey: "fitem_code"});
  product.hasMany(billing_master, { as: "billing_masters", foreignKey: "fitem_code"});
  consumption_detail.belongsTo(product, { as: "itemcode_product", foreignKey: "itemcode"});
  product.hasMany(consumption_detail, { as: "consumption_details", foreignKey: "itemcode"});
  consumption_detail.belongsTo(product, { as: "subitemcode_product", foreignKey: "subitemcode"});
  product.hasMany(consumption_detail, { as: "subitemcode_consumption_details", foreignKey: "subitemcode"});
  order_detail.belongsTo(product, { as: "itemcode_product", foreignKey: "itemcode"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "itemcode"});
  price_circular_detail.belongsTo(product, { as: "itemcode_product", foreignKey: "itemcode"});
  product.hasMany(price_circular_detail, { as: "price_circular_details", foreignKey: "itemcode"});
  stock.belongsTo(product, { as: "itemcode_product", foreignKey: "itemcode"});
  product.hasMany(stock, { as: "stocks", foreignKey: "itemcode"});
  voucher_detail.belongsTo(product, { as: "product_product", foreignKey: "product"});
  product.hasMany(voucher_detail, { as: "voucher_details", foreignKey: "product"});
  billing_master.belongsTo(return_type_list, { as: "return_type_return_type_list", foreignKey: "return_type"});
  return_type_list.hasMany(billing_master, { as: "billing_masters", foreignKey: "return_type"});
  role_detail.belongsTo(role_master, { as: "role", foreignKey: "roleid"});
  role_master.hasMany(role_detail, { as: "role_details", foreignKey: "roleid"});
  users.belongsTo(role_master, { as: "role", foreignKey: "roleid"});
  role_master.hasMany(users, { as: "users", foreignKey: "roleid"});
  post.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(post, { as: "posts", foreignKey: "user_id"});
  voucher_detail.belongsTo(voucher_master, { as: "pidno_voucher_master", foreignKey: "pidno"});
  voucher_master.hasMany(voucher_detail, { as: "voucher_details", foreignKey: "pidno"});
  ac_ledger.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(ac_ledger, { as: "ac_ledgers", foreignKey: "Warehouse_Code"});
  billing_detail.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(billing_detail, { as: "billing_details", foreignKey: "Warehouse_Code"});
  billing_detail.belongsTo(warehouse_list, { as: "Warehouse_CodeInto_warehouse_list", foreignKey: "Warehouse_CodeInto"});
  warehouse_list.hasMany(billing_detail, { as: "Warehouse_CodeInto_billing_details", foreignKey: "Warehouse_CodeInto"});
  billing_master.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(billing_master, { as: "billing_masters", foreignKey: "Warehouse_Code"});
  consumption_detail.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(consumption_detail, { as: "consumption_details", foreignKey: "Warehouse_Code"});
  order_master.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(order_master, { as: "order_masters", foreignKey: "Warehouse_Code"});
  stock.belongsTo(warehouse_list, { as: "Warehouse_Code_warehouse_list", foreignKey: "Warehouse_Code"});
  warehouse_list.hasMany(stock, { as: "stocks", foreignKey: "Warehouse_Code"});

  return {
    ac: ac,
    ac_comments: ac_comments,
    ac_ledger: ac_ledger,
    assembling_list: assembling_list,
    billing_detail: billing_detail,
    billing_master: billing_master,
    city_list: city_list,
    companysetup: companysetup,
    consumption_detail: consumption_detail,
    fin_ac: fin_ac,
    fin_bal1: fin_bal1,
    fin_bal2: fin_bal2,
    fin_notes_detail: fin_notes_detail,
    fin_notes_master: fin_notes_master,
    fin_pl: fin_pl,
    group_list: group_list,
    itembrandlist: itembrandlist,
    itemcat: itemcat,
    itemsubcatlist: itemsubcatlist,
    itemtype: itemtype,
    module_log: module_log,
    modulelist: modulelist,
    order_detail: order_detail,
    order_master: order_master,
    payreq_detail: payreq_detail,
    payreq_master: payreq_master,
    post: post,
    price_circular_detail: price_circular_detail,
    price_circular_master: price_circular_master,
    product: product,
    product_docs: product_docs,
    return_type_list: return_type_list,
    role_detail: role_detail,
    role_master: role_master,
    stock: stock,
    sysdiagrams: sysdiagrams,
    table_id_no: table_id_no,
    user: user,
    users: users,
    voucher_detail: voucher_detail,
    voucher_master: voucher_master,
    warehouse_list: warehouse_list,
  };
}
