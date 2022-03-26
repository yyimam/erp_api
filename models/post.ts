import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface postAttributes {
  id: number;
  user_id?: string;
  title?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type postPk = "id";
export type postId = post[postPk];
export type postOptionalAttributes = "id" | "user_id" | "title" | "content" | "created_at" | "updated_at" | "deleted_at";
export type postCreationAttributes = Optional<postAttributes, postOptionalAttributes>;

export class post extends Model<postAttributes, postCreationAttributes> implements postAttributes {
  id!: number;
  user_id?: string;
  title?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // post belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof post {
    return post.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
