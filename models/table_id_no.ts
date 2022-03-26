import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface table_id_noAttributes {
  tablename: string;
  idno: number;
  sNo?: number;
}

export type table_id_noPk = "tablename";
export type table_id_noId = table_id_no[table_id_noPk];
export type table_id_noOptionalAttributes = "sNo";
export type table_id_noCreationAttributes = Optional<table_id_noAttributes, table_id_noOptionalAttributes>;

export class table_id_no extends Model<table_id_noAttributes, table_id_noCreationAttributes> implements table_id_noAttributes {
  tablename!: string;
  idno!: number;
  sNo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof table_id_no {
    return table_id_no.init({
    tablename: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'table_id_no',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tablename" },
        ]
      },
    ]
  });
  }
}
