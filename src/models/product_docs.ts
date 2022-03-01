import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface product_docsAttributes {
  code: string;
  name: string;
  itemtype: string;
  itemcat?: string;
  rate?: number;
  itemunit?: string;
  subitemcat?: string;
  brand?: string;
  prate?: number;
  origin?: string;
  pcspctn?: number;
  schmper?: number;
  xschmper?: number;
  bonuspcs?: number;
  article?: string;
  metrounit?: number;
  pkcgtype?: string;
  weight?: number;
  measurment?: number;
  barcode?: string;
  minqty?: number;
  density?: number;
  Scrap?: number;
  filename?: string;
  no_of_files?: number;
  batch_id?: string;
  round_in_matreq?: number;
  old_code?: string;
  item_disabled?: number;
}

export type product_docsPk = "code";
export type product_docsId = product_docs[product_docsPk];
export type product_docsOptionalAttributes = "itemcat" | "rate" | "itemunit" | "subitemcat" | "brand" | "prate" | "origin" | "pcspctn" | "schmper" | "xschmper" | "bonuspcs" | "article" | "metrounit" | "pkcgtype" | "weight" | "measurment" | "barcode" | "minqty" | "density" | "Scrap" | "filename" | "no_of_files" | "batch_id" | "round_in_matreq" | "old_code" | "item_disabled";
export type product_docsCreationAttributes = Optional<product_docsAttributes, product_docsOptionalAttributes>;

export class product_docs extends Model<product_docsAttributes, product_docsCreationAttributes> implements product_docsAttributes {
  code!: string;
  name!: string;
  itemtype!: string;
  itemcat?: string;
  rate?: number;
  itemunit?: string;
  subitemcat?: string;
  brand?: string;
  prate?: number;
  origin?: string;
  pcspctn?: number;
  schmper?: number;
  xschmper?: number;
  bonuspcs?: number;
  article?: string;
  metrounit?: number;
  pkcgtype?: string;
  weight?: number;
  measurment?: number;
  barcode?: string;
  minqty?: number;
  density?: number;
  Scrap?: number;
  filename?: string;
  no_of_files?: number;
  batch_id?: string;
  round_in_matreq?: number;
  old_code?: string;
  item_disabled?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof product_docs {
    return product_docs.init({
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    itemtype: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    itemcat: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    itemunit: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    subitemcat: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    brand: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    prate: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pcspctn: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    schmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    xschmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    bonuspcs: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    article: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    metrounit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    pkcgtype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    measurment: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    minqty: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    density: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    Scrap: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_of_files: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    batch_id: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    round_in_matreq: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    old_code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    item_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "IX_product_docs",
        using: "BTREE",
        fields: [
          { name: "article" },
        ]
      },
      {
        name: "IX_product_docs_1",
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "IX_product_docs_2",
        using: "BTREE",
        fields: [
          { name: "batch_id" },
        ]
      },
      {
        name: "IX_product_docs_3",
        using: "BTREE",
        fields: [
          { name: "brand" },
        ]
      },
      {
        name: "IX_product_docs_4",
        using: "BTREE",
        fields: [
          { name: "itemcat" },
        ]
      },
      {
        name: "IX_product_docs_5",
        using: "BTREE",
        fields: [
          { name: "filename" },
        ]
      },
      {
        name: "IX_product_docs_6",
        using: "BTREE",
        fields: [
          { name: "itemtype" },
        ]
      },
      {
        name: "IX_product_docs_7",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "IX_product_docs_8",
        using: "BTREE",
        fields: [
          { name: "subitemcat" },
        ]
      },
    ]
  });
  }
}
