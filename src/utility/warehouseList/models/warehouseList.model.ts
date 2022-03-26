import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, PrimaryKey } from 'sequelize-typescript';

@Table({tableName: 'Warehouse_list'})
export class WarehouseList extends Model {

  @Column({ 
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({})
  code: string;

  @Column
  name: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

}