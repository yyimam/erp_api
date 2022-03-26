import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreatePurchaseInvoiceDto } from './dto/create-purchaseInvoice.dto';
export declare class PurchaseInvoiceService {
    private readonly BillingMasterModel;
    constructor(BillingMasterModel: typeof BillingMaster);
    create(CreatePurchaseInvoiceDto: CreatePurchaseInvoiceDto): Promise<BillingMaster>;
    update(code: string, UpdatePurchaseInvoiceDto: CreatePurchaseInvoiceDto): Promise<any>;
    findAll(): Promise<BillingMaster[]>;
    findOne(code: string): Promise<BillingMaster>;
}
