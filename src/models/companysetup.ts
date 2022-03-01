import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';

export interface companysetupAttributes {
  code: string;
  name?: string;
  address?: string;
  telno?: string;
  stregno?: string;
  ntnno?: string;
  yearstart?: Date;
  yearend?: Date;
  protectdate?: Date;
  contactno?: string;
  tcreditors?: string;
  tdebitors?: string;
  transporter?: string;
  sol_comm?: string;
  os_bilty?: string;
  show_stax_inv?: number;
  add_Inv_stock?: number;
  last_year_db_name?: string;
  image_saving?: number;
  promotion?: string;
  doc_db?: string;
  app_version?: string;
}

export type companysetupPk = "code";
export type companysetupId = companysetup[companysetupPk];
export type companysetupOptionalAttributes = "name" | "address" | "telno" | "stregno" | "ntnno" | "yearstart" | "yearend" | "protectdate" | "contactno" | "tcreditors" | "tdebitors" | "transporter" | "sol_comm" | "os_bilty" | "show_stax_inv" | "add_Inv_stock" | "last_year_db_name" | "image_saving" | "promotion" | "doc_db" | "app_version";
export type companysetupCreationAttributes = Optional<companysetupAttributes, companysetupOptionalAttributes>;

export class companysetup extends Model<companysetupAttributes, companysetupCreationAttributes> implements companysetupAttributes {
  code!: string;
  name?: string;
  address?: string;
  telno?: string;
  stregno?: string;
  ntnno?: string;
  yearstart?: Date;
  yearend?: Date;
  protectdate?: Date;
  contactno?: string;
  tcreditors?: string;
  tdebitors?: string;
  transporter?: string;
  sol_comm?: string;
  os_bilty?: string;
  show_stax_inv?: number;
  add_Inv_stock?: number;
  last_year_db_name?: string;
  image_saving?: number;
  promotion?: string;
  doc_db?: string;
  app_version?: string;

  // companysetup belongsTo ac via transporter
  transporter_ac!: ac;
  getTransporter_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setTransporter_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createTransporter_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // companysetup belongsTo ac via sol_comm
  sol_comm_ac!: ac;
  getSol_comm_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setSol_comm_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createSol_comm_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // companysetup belongsTo ac via os_bilty
  os_bilty_ac!: ac;
  getOs_bilty_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setOs_bilty_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createOs_bilty_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;

  static initModel(sequelize: Sequelize.Sequelize): typeof companysetup {
    return companysetup.init({
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    telno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stregno: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ntnno: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    yearstart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    yearend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    protectdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contactno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tcreditors: {
      type: DataTypes.CHAR(24),
      allowNull: true
    },
    tdebitors: {
      type: DataTypes.CHAR(24),
      allowNull: true
    },
    transporter: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    sol_comm: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    os_bilty: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    show_stax_inv: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    add_Inv_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    last_year_db_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    image_saving: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    promotion: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    doc_db: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    app_version: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'companysetup',
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
        name: "FK_companysetup_Ac_os_bilty",
        using: "BTREE",
        fields: [
          { name: "os_bilty" },
        ]
      },
      {
        name: "FK_companysetup_Ac_sol_comm",
        using: "BTREE",
        fields: [
          { name: "sol_comm" },
        ]
      },
      {
        name: "FK_companysetup_Ac_Transporter",
        using: "BTREE",
        fields: [
          { name: "transporter" },
        ]
      },
    ]
  });
  }
}
