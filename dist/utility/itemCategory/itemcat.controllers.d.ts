import { CreateItemCatDto } from './dto/create-itemcat.dto';
import { ItemCat } from './models/itemcat.model';
import { ItemCatService } from './itemcat.service';
import { Response } from 'express';
export declare class ItemCatController {
    private readonly ItemCatsService;
    constructor(ItemCatsService: ItemCatService);
    create(createItemCatDto: CreateItemCatDto, res: Response): Promise<void | ItemCat>;
    update(code: string, updateItemCatDto: CreateItemCatDto, res: Response): void;
    findAll(): Promise<ItemCat[]>;
    findOne(code: string): Promise<ItemCat>;
    remove(code: string, res: Response): Promise<void | ItemCat>;
}
