import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role_detail, role_detailId } from './role_detail';

export interface modulelistAttributes {
  moduletype: string;
  modulename?: string;
  modulenature?: string;
  moduledesc?: string;
  menus?: string;
  accountslink?: number;
  vouchertype?: string;
  formcolor?: string;
  gridbackcolor?: string;
  sysdate?: Date;
  dependent?: number;
  serialNo?: number;
  idNo?: number;
}

export type modulelistPk = "moduletype";
export type modulelistId = modulelist[modulelistPk];
export type modulelistOptionalAttributes = "modulename" | "modulenature" | "moduledesc" | "menus" | "accountslink" | "vouchertype" | "formcolor" | "gridbackcolor" | "sysdate" | "dependent" | "serialNo" | "idNo";
export type modulelistCreationAttributes = Optional<modulelistAttributes, modulelistOptionalAttributes>;

export class modulelist extends Model<modulelistAttributes, modulelistCreationAttributes> implements modulelistAttributes {
  moduletype!: string;
  modulename?: string;
  modulenature?: string;
  moduledesc?: string;
  menus?: string;
  accountslink?: number;
  vouchertype?: string;
  formcolor?: string;
  gridbackcolor?: string;
  sysdate?: Date;
  dependent?: number;
  serialNo?: number;
  idNo?: number;

  // modulelist hasMany role_detail via moduletype
  role_details!: role_detail[];
  getRole_details!: Sequelize.HasManyGetAssociationsMixin<role_detail>;
  setRole_details!: Sequelize.HasManySetAssociationsMixin<role_detail, role_detailId>;
  addRole_detail!: Sequelize.HasManyAddAssociationMixin<role_detail, role_detailId>;
  addRole_details!: Sequelize.HasManyAddAssociationsMixin<role_detail, role_detailId>;
  createRole_detail!: Sequelize.HasManyCreateAssociationMixin<role_detail>;
  removeRole_detail!: Sequelize.HasManyRemoveAssociationMixin<role_detail, role_detailId>;
  removeRole_details!: Sequelize.HasManyRemoveAssociationsMixin<role_detail, role_detailId>;
  hasRole_detail!: Sequelize.HasManyHasAssociationMixin<role_detail, role_detailId>;
  hasRole_details!: Sequelize.HasManyHasAssociationsMixin<role_detail, role_detailId>;
  countRole_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof modulelist {
    return modulelist.init({
    moduletype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    modulename: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    modulenature: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    moduledesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    menus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    accountslink: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vouchertype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    formcolor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gridbackcolor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dependent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    serialNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modulelist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "moduletype" },
        ]
      },
      {
        name: "IX_modulelist",
        using: "BTREE",
        fields: [
          { name: "menus" },
        ]
      },
      {
        name: "IX_modulelist_1",
        using: "BTREE",
        fields: [
          { name: "modulenature" },
        ]
      },
      {
        name: "IX_modulelist_2",
        using: "BTREE",
        fields: [
          { name: "vouchertype" },
        ]
      },
    ]
  });
  }
}
