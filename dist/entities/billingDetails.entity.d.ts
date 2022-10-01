import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';
import { BillingMaster } from './billingMaster.entity';
import { Model } from 'sequelize-typescript';
import { Product } from 'src/utility/products/models/product.model';
export declare class BillingDetails extends Model {
    idno: number;
    pidno: number;
    estatus: string;
    itemcode: string;
    description: string;
    itemunit: string;
    amount: number;
    sed: number;
    sedamount: number;
    gst: number;
    gstamount: number;
    netamount: number;
    itemdiscount: number;
    expiry_date: Date;
    loose_qty: number;
    qty_in_pcs: number;
    pcspctn: number;
    bonuspcs: number;
    itemdiscount_P: number;
    schmper: number;
    schmamt: number;
    xschmper: number;
    xschmamt: number;
    oschmper: number;
    oschmamt: number;
    qty: number;
    rate: number;
    Warehouse_Code: string;
    fitemcode: string;
    Warehouse_CodeInto: string;
    rate_change: number;
    MRP: number;
    QC_Posted: number;
    QC_Remarks: string;
    QC_Post_Date: Date;
    batch_qty: number;
    iss_qty: number;
    req_qty: number;
    batch_id: string;
    promotion_sales: number;
    Batch_Code: string;
    itaxAmount: number;
    qty_yards: number;
    rate_yards: number;
    amount_yards: number;
    tailor_ac: string;
    particular: string;
    size: number;
    debit_Ac: string;
    credit_Ac: string;
    discountD: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    billingDetails: BillingMaster;
    product: Product;
    product2: Product;
    WarehouseList: WarehouseList;
    WarehouseList2: WarehouseList;
}
