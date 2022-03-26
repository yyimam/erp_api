import { CreateItemSubCatListDto } from './dto/create-itemSubCatList.dto';
import { ItemSubCatList } from './models/itemSubCatList.model';
import { ItemSubCatListService } from './itemSubCatList.service';
import { Response } from 'express';
export declare class ItemSubCatListController {
    private readonly ItemSubCatListsService;
    constructor(ItemSubCatListsService: ItemSubCatListService);
    create(createItemSubCatListDto: CreateItemSubCatListDto, res: Response): Promise<void | ItemSubCatList>;
    update(code: string, updateItemSubCatListDto: CreateItemSubCatListDto, res: Response): void;
    findAll(): Promise<ItemSubCatList[]>;
    findOne(code: string): Promise<ItemSubCatList>;
    remove(code: string, res: Response): Promise<void | ItemSubCatList>;
}
