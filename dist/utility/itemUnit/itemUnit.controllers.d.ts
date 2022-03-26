import { CreateItemUnitDto } from './dto/create-itemUnit.dto';
import { ItemUnit } from './models/itemUnit.model';
import { ItemUnitService } from './itemUnit.service';
import { Response } from 'express';
export declare class ItemUnitController {
    private readonly itemUnitService;
    constructor(itemUnitService: ItemUnitService);
    create(createItemUnitDto: CreateItemUnitDto, res: Response): Promise<void | ItemUnit>;
    update(code: string, updateItemUnitDto: CreateItemUnitDto, res: Response): void;
    findAll(): Promise<ItemUnit[]>;
    findOne(code: string): Promise<ItemUnit>;
    remove(code: string, res: Response): Promise<void | ItemUnit>;
}
