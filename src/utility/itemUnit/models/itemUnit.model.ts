import { Column, Model, Table, PrimaryKey, CreatedAt,UpdatedAt,DeletedAt, } from 'sequelize-typescript';

@Table({tableName: 'itemunit'})
export class ItemUnit extends Model {
  @Column({ 
    autoIncrement: true,
    unique:true
  })
  id: number;
  
  @PrimaryKey
  @Column
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