import { BillingMaster } from '../../../entities/billingMaster.entity';
import { PurchaseInvoiceController } from './purchaseInvoice.controllers';
import { PurchaseInvoiceService } from './purchaseInvoice.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([BillingMaster])],
  controllers: [PurchaseInvoiceController],
  providers: [PurchaseInvoiceService],
})

export class PurchaseInvoiceModule {}