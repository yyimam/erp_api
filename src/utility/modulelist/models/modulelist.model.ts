import { RoleDetail } from './../../roleDetail/models/roleDetail.model';
import { Column, Model, Table, PrimaryKey, CreatedAt,UpdatedAt,DeletedAt, DataType, ForeignKey, BelongsTo, } from 'sequelize-typescript';

@Table({tableName: 'modulelist'})
export class ModuleList extends Model {
  
  @PrimaryKey
  @ForeignKey(() => RoleDetail)
  @Column({
      type: DataType.STRING
  })
  moduletype: string;

  @Column
  modulename: string;

  @Column
  modulenature: string;
  
  @Column
  moduledesc: string;
  
  @Column
  menus: string;
  
  @Column
  accountslink: number;
  
  @Column
  vouchertype: string;
  
  @Column
  formcolor: string;
  
  @Column
  gridbackcolor: string;
  
  @Column
  sysdate: Date;
  
  @Column
  dependent: number;
  
  @Column
  serialNo: number;
  
  @Column
  idNo: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @BelongsTo(() => RoleDetail)
  roleDetail: RoleDetail; 
 
}