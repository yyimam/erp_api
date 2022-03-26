import { ModuleList } from './../../modulelist/models/modulelist.model';
import { Model } from 'sequelize-typescript';
export declare class RoleDetail extends Model {
    idno: number;
    roleid: number;
    moduletype: string;
    can_add?: number;
    can_access?: number;
    can_edit?: number;
    can_delete?: number;
    can_print?: number;
    can_docs?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    players: ModuleList[];
}
