import { BillingDetails } from '../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOpeningStockDto } from './dto/create-openingStock.dto';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { Product } from 'src/utility/products/models/product.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';

@Injectable()
export class OpeningStockService {
  constructor(
    @InjectModel(BillingMaster)
    private readonly BillingMasterModel: typeof BillingMaster,
  ) { }

  async create(CreateOpeningStockDto: CreateOpeningStockDto): Promise<BillingMaster> {
    let t: {} = CreateOpeningStockDto
    return this.BillingMasterModel.create(t);
  }

  async update(code: string, UpdateOpeningStockDto: CreateOpeningStockDto): Promise<any> {
    let t: {} = UpdateOpeningStockDto;
    return await this.BillingMasterModel.update(t, { where: { code: code } });
  }

  async findAll(param: any): Promise<any> {
    return this.BillingMasterModel.findAndCountAll({
      include: [ 
        { model: AC, attributes: [['title', 'label'], ['acode', 'value']] },
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }],
        where: { estatus: "OS" },
        attributes: ['idno', 'EntryNo','remarks','entryno','estatus','edate'],
        limit: +param.limit,
        offset: +param.offset * +param.limit,
    });
  }

  async findOne(code: string): Promise<BillingMaster> {
    return this.BillingMasterModel.findOne({
      include: [ 
      {model: BillingDetails, include: [
        { model: Product,as: '_itemcode', attributes: [['name', 'label'], ['code', 'value']] },
        { model: WarehouseList,as: '_Warehouse_Code', attributes: [['name', 'label'], ['code', 'value']] }, 
      ], 
        attributes:['Warehouse_Code','estatus','idno', 'pidno', 'itemcode', 'qty','rate', 'amount', 'netamount', 'qty_in_pcs', 'pcspctn','pcspctn','description', 'QC_Remarks', 'fitemcode']},
    ],
      where: { idno: code },
      attributes: ['idno', 'EntryNo','remarks','entryno','estatus','edate']
    });
  }


}
