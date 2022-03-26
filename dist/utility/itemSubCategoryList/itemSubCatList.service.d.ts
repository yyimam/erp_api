import { ItemSubCatList } from './models/itemSubCatList.model';
import { CreateItemSubCatListDto } from './dto/create-itemSubCatList.dto';
export declare class ItemSubCatListService {
    private readonly ItemSubCatListModel;
    constructor(ItemSubCatListModel: typeof ItemSubCatList);
    create(CreateItemSubCatListDto: CreateItemSubCatListDto): Promise<ItemSubCatList>;
    update(code: string, UpdateItemSubCatListDto: CreateItemSubCatListDto): Promise<any>;
    findAll(): Promise<ItemSubCatList[]>;
    findOne(code: string): Promise<ItemSubCatList>;
    findById(id: number): Promise<ItemSubCatList>;
    remove(code: string): Promise<ItemSubCatList>;
}
