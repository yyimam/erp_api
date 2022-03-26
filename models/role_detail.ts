import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modulelist, modulelistId } from './modulelist';
import type { role_master, role_masterId } from './role_master';

export interface role_detailAttributes {
  idno: number;
  roleid: number;
  moduletype: string;
  can_add?: number;
  can_access?: number;
  can_edit?: number;
  can_delete?: number;
  can_print?: number;
  can_docs?: number;
}

export type role_detailPk = "idno";
export type role_detailId = role_detail[role_detailPk];
export type role_detailOptionalAttributes = "can_add" | "can_access" | "can_edit" | "can_delete" | "can_print" | "can_docs";
export type role_detailCreationAttributes = Optional<role_detailAttributes, role_detailOptionalAttributes>;

export class role_detail extends Model<role_detailAttributes, role_detailCreationAttributes> implements role_detailAttributes {
  idno!: number;
  roleid!: number;
  moduletype!: string;
  can_add?: number;
  can_access?: number;
  can_edit?: number;
  can_delete?: number;
  can_print?: number;
  can_docs?: number;

  // role_detail belongsTo modulelist via moduletype
  moduletype_modulelist!: modulelist;
  getModuletype_modulelist!: Sequelize.BelongsToGetAssociationMixin<modulelist>;
  setModuletype_modulelist!: Sequelize.BelongsToSetAssociationMixin<modulelist, modulelistId>;
  createModuletype_modulelist!: Sequelize.BelongsToCreateAssociationMixin<modulelist>;
  // role_detail belongsTo role_master via roleid
  role!: role_master;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role_master>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role_master, role_masterId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_detail {
    return role_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'role_master',
        key: 'roleid'
      }
    },
    moduletype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      references: {
        model: 'modulelist',
        key: 'moduletype'
      }
    },
    can_add: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    can_access: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    can_edit: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    can_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    can_print: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    can_docs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'role_detail',
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
        name: "IX_role_detail",
        using: "BTREE",
        fields: [
          { name: "moduletype" },
        ]
      },
      {
        name: "IX_role_detail_1",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
    ]
  });
  }
}
