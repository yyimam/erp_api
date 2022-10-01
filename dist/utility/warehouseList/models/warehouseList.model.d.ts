import { BillingDetails } from './../../../entities/billingDetails.entity';
import { Model } from 'sequelize-typescript';
import { BillingMaster } from 'src/entities/billingMaster.entity';
import { OrderMaster } from 'src/entities/orderMaster.entity';
export declare class WarehouseList extends Model {
    id: number;
    code: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    orderMaster: OrderMaster;
    billingMaster: BillingMaster;
    billingDetails: BillingDetails;
}
