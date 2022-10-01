import { BillingDetails } from '../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGoodsReceivingNoteDto } from './dto/create-goodsReceivingNote.dto';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';
import { Product } from 'src/utility/products/models/product.model';

@Injectable()
export class GoodsReceivingNoteService {
  constructor(
    @InjectModel(BillingMaster)
    private readonly BillingMasterModel: typeof BillingMaster,
  ) { }

  async create(CreateGoodsReceivingNoteDto: CreateGoodsReceivingNoteDto): Promise<BillingMaster> {
    let t: {} = CreateGoodsReceivingNoteDto
    return this.BillingMasterModel.create(t);
  }

  async update(code: string, UpdateGoodsReceivingNoteDto: CreateGoodsReceivingNoteDto): Promise<any> {
    let t: {} = UpdateGoodsReceivingNoteDto;
    return await this.BillingMasterModel.update(t, { where: { code: code } });
  }

  async findAll(param: any): Promise<any> {
    return this.BillingMasterModel.findAndCountAll({
      include: [ 
        { model: AC, attributes: [['title', 'label'], ['acode', 'value']] },
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }],
        where: { estatus: "DR" },
        attributes: ['idno', 'EntryNo', 'post_date', 'ent_date','itemdescription', 'posted','bilty_filename', 'freight', 'circular_no', 'biltyno','Order_No','Transporter','disc_p','remarks','Warehouse_Code','entryno','party_ac','estatus','edate'],
        limit: +param.limit,
        offset: +param.offset * +param.limit,
    });
  }

  async findOne(code: string): Promise<BillingMaster> {
    return this.BillingMasterModel.findOne({
      include: [ 
        {model: BillingDetails, include: [{ model: Product ,as: '_itemcode', attributes: [['name', 'label'], ['code', 'value']] }], attributes:['idno', 'pidno', 'itemcode', 'qty','description', 'QC_Remarks']},
        { model: AC, attributes: [['title', 'label'], ['acode', 'value']] },
        { model: WarehouseList, attributes: [['name', 'label'], ['code', 'value']] }],
        where: { idno: code },
        attributes: ['idno', 'EntryNo', 'post_date', 'ent_date','itemdescription', 'posted','bilty_filename', 'freight', 'circular_no', 'biltyno','Order_No','Transporter','disc_p','remarks','Warehouse_Code','entryno','party_ac','estatus','edate']
    });
  }


}
