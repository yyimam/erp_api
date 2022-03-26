import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface module_logAttributes {
  idno?: string;
  moduletype?: string;
  edate?: Date;
  loginuser?: string;
  sysuser?: string;
  remarks?: string;
  data?: string;
}

export type module_logOptionalAttributes = "idno" | "moduletype" | "edate" | "loginuser" | "sysuser" | "remarks" | "data";
export type module_logCreationAttributes = Optional<module_logAttributes, module_logOptionalAttributes>;

export class module_log extends Model<module_logAttributes, module_logCreationAttributes> implements module_logAttributes {
  idno?: string;
  moduletype?: string;
  edate?: Date;
  loginuser?: string;
  sysuser?: string;
  remarks?: string;
  data?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof module_log {
    return module_log.init({
    idno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    moduletype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loginuser: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sysuser: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'module_log',
    timestamps: false,
    indexes: [
      {
        name: "IX_Module_Log",
        using: "BTREE",
        fields: [
          { name: "idno" },
        ]
      },
      {
        name: "IX_Module_Log_1",
        using: "BTREE",
        fields: [
          { name: "moduletype" },
        ]
      },
      {
        name: "IX_Module_Log_2",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Module_Log_3",
        using: "BTREE",
        fields: [
          { name: "loginuser" },
        ]
      },
    ]
  });
  }
}
