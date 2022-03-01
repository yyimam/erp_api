import { Column, Model, Table, PrimaryKey,  CreatedAt,UpdatedAt,DeletedAt, } from 'sequelize-typescript';

@Table({tableName: 'product'})
export class Product extends Model {

  @PrimaryKey
  @Column
  code: string;

  @Column
  name: string;

  @Column
  itemtype!: string;

  @Column
  itemcat: string;

  @Column
  rate: number;

  @Column
  itemunit: string;

  @Column
  subitemcat: string;

  @Column
  brand: string;

  @Column
  prate: number;

  @Column
  origin: string;

  @Column
  pcspctn: number;

  @Column
  schmper: number;

  @Column
  xschmper: number;

  @Column
  bonuspcs: number;

  @Column
  article: string;

  @Column
  metrounit: number;

  @Column
  pkcgtype: string;

  @Column
  weight: number;

  @Column
  measurment: number;

  @Column
  barcode: string;

  @Column
  minqty: number;

  @Column
  density: number;

  @Column
  Scrap: number;

  @Column
  filename: string;

  @Column
  no_of_files: number;

  @Column
  batch_id: string;

  @Column
  round_in_matreq: number;

  @Column
  old_code: string;

  @Column
  item_disabled: number;

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
