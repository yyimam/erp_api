import { RoleDetail } from './../../roleDetail/models/roleDetail.model';
import { Model } from 'sequelize-typescript';
export declare class ModuleList extends Model {
    moduletype: string;
    modulename: string;
    modulenature: string;
    moduledesc: string;
    menus: string;
    accountslink: number;
    vouchertype: string;
    formcolor: string;
    gridbackcolor: string;
    sysdate: Date;
    dependent: number;
    serialNo: number;
    idNo: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    roleDetail: RoleDetail;
}
