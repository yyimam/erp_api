import { BillingMaster } from './../../../entities/billingMaster.entity';
import { CreatePurchaseInvoiceDto } from './dto/create-purchaseInvoice.dto';
import { PurchaseInvoiceService } from './purchaseInvoice.service';
import { Response } from 'express';
export declare class PurchaseInvoiceController {
    private readonly PurchaseInvoicesService;
    constructor(PurchaseInvoicesService: PurchaseInvoiceService);
    create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto, res: Response): Promise<void | BillingMaster>;
    update(code: string, updatePurchaseInvoiceDto: CreatePurchaseInvoiceDto, res: Response): void;
    findAll(): Promise<BillingMaster[]>;
    findOne(code: string): Promise<BillingMaster>;
}
