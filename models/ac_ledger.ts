import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface ac_ledgerAttributes {
  idno: number;
  acode?: string;
  descrip?: string;
  edate?: Date;
  debit?: number;
  credit?: number;
  estatus?: string;
  Warehouse_Code?: string;
  billno?: string;
  ent_date?: Date;
  comtype?: string;
  clearing_date?: Date;
  chq_date?: Date;
  chequeno?: string;
  posted?: number;
  refno?: string;
  title2?: string;
  pidno?: number;
  itemdescription?: string;
  doc_attached?: number;
  cidno?: number;
}

export type ac_ledgerPk = "idno";
export type ac_ledgerId = ac_ledger[ac_ledgerPk];
export type ac_ledgerOptionalAttributes = "acode" | "descrip" | "edate" | "debit" | "credit" | "estatus" | "Warehouse_Code" | "billno" | "ent_date" | "comtype" | "clearing_date" | "chq_date" | "chequeno" | "posted" | "refno" | "title2" | "pidno" | "itemdescription" | "doc_attached" | "cidno";
export type ac_ledgerCreationAttributes = Optional<ac_ledgerAttributes, ac_ledgerOptionalAttributes>;

export class ac_ledger extends Model<ac_ledgerAttributes, ac_ledgerCreationAttributes> implements ac_ledgerAttributes {
  idno!: number;
  acode?: string;
  descrip?: string;
  edate?: Date;
  debit?: number;
  credit?: number;
  estatus?: string;
  Warehouse_Code?: string;
  billno?: string;
  ent_date?: Date;
  comtype?: string;
  clearing_date?: Date;
  chq_date?: Date;
  chequeno?: string;
  posted?: number;
  refno?: string;
  title2?: string;
  pidno?: number;
  itemdescription?: string;
  doc_attached?: number;
  cidno?: number;

  // ac_ledger belongsTo ac via acode
  acode_ac!: ac;
  getAcode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setAcode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createAcode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // ac_ledger belongsTo ac via comtype
  comtype_ac!: ac;
  getComtype_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setComtype_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createComtype_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // ac_ledger belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ac_ledger {
    return ac_ledger.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    acode: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    descrip: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    debit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    credit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    estatus: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Warehouse_Code: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'warehouse_list',
        key: 'code'
      }
    },
    billno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ent_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comtype: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    clearing_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chq_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chequeno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    refno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    title2: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itemdescription: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    doc_attached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ac_ledger',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idno" },
        ]
      },
      {
        name: "IX_billing_ledger",
        using: "BTREE",
        fields: [
          { name: "acode" },
        ]
      },
      {
        name: "IX_Ac_Ledger",
        using: "BTREE",
        fields: [
          { name: "billno" },
        ]
      },
      {
        name: "IX_Ac_Ledger_1",
        using: "BTREE",
        fields: [
          { name: "chq_date" },
        ]
      },
      {
        name: "IX_Ac_Ledger_10",
        using: "BTREE",
        fields: [
          { name: "Warehouse_Code" },
        ]
      },
      {
        name: "IX_Ac_Ledger_2",
        using: "BTREE",
        fields: [
          { name: "clearing_date" },
        ]
      },
      {
        name: "IX_Ac_Ledger_3",
        using: "BTREE",
        fields: [
          { name: "comtype" },
        ]
      },
      {
        name: "IX_Ac_Ledger_4",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Ac_Ledger_5",
        using: "BTREE",
        fields: [
          { name: "ent_date" },
        ]
      },
      {
        name: "IX_Ac_Ledger_6",
        using: "BTREE",
        fields: [
          { name: "estatus" },
        ]
      },
      {
        name: "IX_Ac_Ledger_7",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "IX_Ac_Ledger_8",
        using: "BTREE",
        fields: [
          { name: "refno" },
        ]
      },
      {
        name: "IX_Ac_Ledger_9",
        using: "BTREE",
        fields: [
          { name: "title2" },
        ]
      },
      {
        name: "IX_Ac_Ledger_11",
        using: "BTREE",
        fields: [
          { name: "cidno" },
        ]
      },
    ]
  });
  }
}
