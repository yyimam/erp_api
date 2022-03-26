import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role_master, role_masterId } from './role_master';

export interface usersAttributes {
  idno: number;
  userid: string;
  userpwd: any;
  roleid: number;
  designation?: string;
  department?: string;
  company_name?: string;
  company_address?: string;
  company_contactno?: string;
  menustyle?: string;
  quicklinkitems?: string;
}

export type usersPk = "idno";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "designation" | "department" | "company_name" | "company_address" | "company_contactno" | "menustyle" | "quicklinkitems";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  idno!: number;
  userid!: string;
  userpwd!: any;
  roleid!: number;
  designation?: string;
  department?: string;
  company_name?: string;
  company_address?: string;
  company_contactno?: string;
  menustyle?: string;
  quicklinkitems?: string;

  // users belongsTo role_master via roleid
  role!: role_master;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role_master>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role_master, role_masterId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    userpwd: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'role_master',
        key: 'roleid'
      }
    },
    designation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company_contactno: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menustyle: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    quicklinkitems: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "FK_users_role_master",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
    ]
  });
  }
}
