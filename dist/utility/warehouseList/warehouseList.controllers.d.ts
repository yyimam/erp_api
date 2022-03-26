import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';
import { WarehouseList } from './models/warehouseList.model';
import { WarehouseListService } from './warehouseList.service';
import { Response } from 'express';
export declare class WarehouseListController {
    private readonly WarehouseListsService;
    constructor(WarehouseListsService: WarehouseListService);
    create(createWarehouseListDto: CreateWarehouseListDto, res: Response): Promise<void | WarehouseList>;
    update(code: string, updateWarehouseListDto: CreateWarehouseListDto, res: Response): void;
    findAll(): Promise<WarehouseList[]>;
    findOne(code: string): Promise<WarehouseList>;
    remove(code: string, res: Response): Promise<void | WarehouseList>;
}
