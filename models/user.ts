import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { post, postId } from './post';

export interface userAttributes {
  id: string;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  gender?: 'female' | 'male';
  birthday?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "email" | "password" | "first_name" | "last_name" | "gender" | "birthday" | "created_at" | "updated_at" | "deleted_at";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: string;
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  gender?: 'female' | 'male';
  birthday?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  // user hasMany post via user_id
  posts!: post[];
  getPosts!: Sequelize.HasManyGetAssociationsMixin<post>;
  setPosts!: Sequelize.HasManySetAssociationsMixin<post, postId>;
  addPost!: Sequelize.HasManyAddAssociationMixin<post, postId>;
  addPosts!: Sequelize.HasManyAddAssociationsMixin<post, postId>;
  createPost!: Sequelize.HasManyCreateAssociationMixin<post>;
  removePost!: Sequelize.HasManyRemoveAssociationMixin<post, postId>;
  removePosts!: Sequelize.HasManyRemoveAssociationsMixin<post, postId>;
  hasPost!: Sequelize.HasManyHasAssociationMixin<post, postId>;
  hasPosts!: Sequelize.HasManyHasAssociationsMixin<post, postId>;
  countPosts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('female','male'),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
