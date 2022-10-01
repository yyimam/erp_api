import { BillingDetails } from '../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFinishedGoodsProductionDto } from './dto/create-finishedGoodsProduction.dto';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { Product } from 'src/utility/products/models/product.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';

@Injectable()
export class FinishedGoodsProductionService {
  constructor(
    @InjectModel(BillingMaster)
    private readonly BillingMasterModel: typeof BillingMaster,
  ) { }

  async create(CreateFinishedGoodsProductionDto: CreateFinishedGoodsProductionDto): Promise<BillingMaster> {
    let t: {} = CreateFinishedGoodsProductionDto
    return this.BillingMasterModel.create(t);
  }

  async update(code: string, UpdateFinishedGoodsProductionDto: CreateFinishedGoodsProductionDto): Promise<any> {
    let t: {} = UpdateFinishedGoodsProductionDto;
    return await this.BillingMasterModel.update(t, { where: { code: code } });
  }

  async findAll(param: any): Promise<any> {
    return this.BillingMasterModel.findAndCountAll({
      include: [ 
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }],
        where: { estatus: "PD" },
        attributes: ['idno', 'EntryNo','mat_type','mir_no', 'post_date', 'ent_date','itemdescription', 'posted','bilty_filename', 'freight', 'circular_no', 'biltyno','Order_No','Transporter','disc_p','remarks','Warehouse_Code','entryno','party_ac','estatus','edate'],
        limit: +param.limit,
        offset: +param.offset * +param.limit,
    });
  }

  async findOne(code: string): Promise<BillingMaster> {
    return this.BillingMasterModel.findOne({
      include: [ 
      {model: BillingDetails, include: [
        { model: Product,as: '_itemcode', attributes: [['name', 'label'], ['code', 'value']] },
       ], attributes:['idno', 'pidno', 'itemcode', 'qty','description']},
      { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }
    ],
      where: { idno: code },
      attributes: ['idno', 'EntryNo','remarks','Warehouse_Code','entryno','estatus','edate']
    });
  }
  
}
