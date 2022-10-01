import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt, DeletedAt, HasOne } from 'sequelize-typescript';
import { BillingMaster } from 'src/entities/billingMaster.entity';
import { OrderMaster } from 'src/entities/orderMaster.entity';

@Table({
  tableName: 'ac',
  timestamps: true})
export class AC extends Model {

  
  @Column({
    autoIncrement: true,
    field : "id"
  })
  idno: number;

  @Column
  acode: string

  @PrimaryKey
  @Column({
    field:"acode"
  })
  id: string
    
  @Column
  title: string;
    
  @Column
  address: string;
  
  @Column
  type: string;
  
  @Column
  clevel: string;
  
  @Column({
    field: 'parent'
  })
  parentId: string;
  
  @Column
  stregno: string;
  
  @Column
  ntnno: string;
  
  @Column
  lastbal: number;
  
  @Column
  cash_bank: string;
  
  @Column
  aging: string;
  
  @Column
  old_acode: string;
  
  @Column
  parentsname: string;
  
  @Column
  Credit_Days: number;
  
  @Column
  vehicleno: string;
  
  @Column
  emboss_line: string;
  
  @Column
  transporter: string;
  
  @Column
  sol_com: number;
  
  @Column
  osb_com: number;
  
  @Column
  discount: number;
  
  @Column
  cr_limit: number;
  
  @Column
  contactperson: string;
  
  @Column
  telno: string;
  
  @Column
  Show_in_Aging: string;
  
  @Column
  depart1: string;
  
  @Column
  contact_person1: string;
  
  @Column
  contact_mobile1: string;
  
  @Column
  email1: string;
  
  @Column
  depart2: string;
  
  @Column
  contact_person2: string;
  
  @Column
  contact_mobile2: string;
  
  @Column
  email2: string;
  
  @Column
  depart3: string;
  
  @Column
  contact_person3: string;
  
  @Column
  contact_mobile3: string;
  
  @Column
  email3: string;
  
  @Column
  lockuser: string;
  
  @Column
  citycode: string;
  
  @Column
  groupcode: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date;

  @HasOne(() => OrderMaster)
  orderMaster: OrderMaster;

  @HasOne(() => BillingMaster)
  billingMaster: BillingMaster;

}