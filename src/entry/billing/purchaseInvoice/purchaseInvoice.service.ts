import { BillingDetails } from './../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePurchaseInvoiceDto } from './dto/create-purchaseInvoice.dto';

@Injectable()
export class PurchaseInvoiceService {
  constructor(
    @InjectModel(BillingMaster)
    private readonly BillingMasterModel: typeof BillingMaster,
  ) { }

  async create(CreatePurchaseInvoiceDto: CreatePurchaseInvoiceDto): Promise<BillingMaster> {
    let t: {} = CreatePurchaseInvoiceDto
    return this.BillingMasterModel.create(t);
  }

  async update(code: string, UpdatePurchaseInvoiceDto: CreatePurchaseInvoiceDto): Promise<any> {
    let t: {} = UpdatePurchaseInvoiceDto;
    return await this.BillingMasterModel.update(t, { where: { code: code } });
  }

  async findAll(): Promise<BillingMaster[]> {
    return this.BillingMasterModel.findAll();
  }

  async findOne(code: string): Promise<BillingMaster> {
    return this.BillingMasterModel.findOne({
      include: [BillingDetails],
      where: { idno: code }
    });
  }


}
