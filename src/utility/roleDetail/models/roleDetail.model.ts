import { ModuleList } from './../../modulelist/models/modulelist.model';
import { Column, Model, Table, PrimaryKey, CreatedAt,UpdatedAt,DeletedAt, HasMany, } from 'sequelize-typescript';

@Table({tableName: 'role_detail'})
export class RoleDetail extends Model {

  @Column
  idno: number;
  
  @Column
  roleid: number;
  
  @PrimaryKey
  @Column
  moduletype: string;
  
  @Column
  can_add?: number;
  
  @Column
  can_access?: number;
  
  @Column
  can_edit?: number;
  
  @Column
  can_delete?: number;
  
  @Column
  can_print?: number;
  
  @Column
  can_docs?: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasMany(() => ModuleList)
  players: ModuleList[]
}