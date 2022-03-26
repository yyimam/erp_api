import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sysdiagramsAttributes {
  name: string;
  principal_id: number;
  diagram_id: number;
  version?: number;
  definition?: any;
}

export type sysdiagramsPk = "diagram_id";
export type sysdiagramsId = sysdiagrams[sysdiagramsPk];
export type sysdiagramsOptionalAttributes = "version" | "definition";
export type sysdiagramsCreationAttributes = Optional<sysdiagramsAttributes, sysdiagramsOptionalAttributes>;

export class sysdiagrams extends Model<sysdiagramsAttributes, sysdiagramsCreationAttributes> implements sysdiagramsAttributes {
  name!: string;
  principal_id!: number;
  diagram_id!: number;
  version?: number;
  definition?: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof sysdiagrams {
    return sysdiagrams.init({
    name: {
      type: DataTypes.STRING(160),
      allowNull: false
    },
    principal_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diagram_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    definition: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sysdiagrams',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "diagram_id" },
        ]
      },
      {
        name: "UK_principal_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "principal_id" },
          { name: "name" },
        ]
      },
    ]
  });
  }
}
