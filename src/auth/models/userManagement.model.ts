import { Column, Model, Table, PrimaryKey, CreatedAt,UpdatedAt,DeletedAt, } from 'sequelize-typescript';

@Table({tableName: 'users'})
export class UserManagement extends Model {
  
  @PrimaryKey
  @Column({ 
    autoIncrement: true,
    unique:true
  })
  idno: number;
  
  @Column({
    field: "userid"
  })
  email: string;
  
  @Column({
    field:'userpwd',
    type: 'TINYBLOB'
  })
  password: string;
  
  @Column
  roleid: string;
  
  @Column
  designation: string;
  
  @Column
  department: string;
  
  @Column
  company_name: string;
  
  @Column
  company_address: string;
  
  @Column
  company_contactno: string;
  
  @Column
  menustyle: string
  
  @Column
  quicklinkitems: string

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