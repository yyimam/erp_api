import { CreateItemTypeDto } from './dto/create-ItemType.dto';
import { ItemType } from './models/ItemType.model';
import { ItemTypeService } from './ItemType.service';
import { Response } from 'express';
export declare class ItemTypeController {
    private readonly ItemTypesService;
    constructor(ItemTypesService: ItemTypeService);
    create(createItemTypeDto: CreateItemTypeDto, res: Response): Promise<void | ItemType>;
    update(code: string, updateItemTypeDto: CreateItemTypeDto, res: Response): Promise<void>;
    findAll(): Promise<ItemType[]>;
    findOne(code: string): Promise<ItemType>;
    remove(code: string, res: Response): Promise<void | ItemType>;
}
