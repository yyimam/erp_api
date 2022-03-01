import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role_detail, role_detailId } from './role_detail';
import type { users, usersId } from './users';

export interface role_masterAttributes {
  roleid: number;
  role_name: string;
}

export type role_masterPk = "roleid";
export type role_masterId = role_master[role_masterPk];
export type role_masterCreationAttributes = role_masterAttributes;

export class role_master extends Model<role_masterAttributes, role_masterCreationAttributes> implements role_masterAttributes {
  roleid!: number;
  role_name!: string;

  // role_master hasMany role_detail via roleid
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
  // role_master hasMany users via roleid
  users!: users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_master {
    return role_master.init({
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'role_master',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
    ]
  });
  }
}
