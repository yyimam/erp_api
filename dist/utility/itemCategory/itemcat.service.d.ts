import { ItemCat } from './models/itemcat.model';
import { CreateItemCatDto } from './dto/create-itemcat.dto';
export declare class ItemCatService {
    private readonly ItemCatModel;
    constructor(ItemCatModel: typeof ItemCat);
    create(CreateItemCatDto: CreateItemCatDto): Promise<ItemCat>;
    update(code: string, UpdateItemCatDto: CreateItemCatDto): Promise<any>;
    findAll(): Promise<ItemCat[]>;
    findOne(code: string): Promise<ItemCat>;
    findById(id: number): Promise<ItemCat>;
    remove(code: string): Promise<ItemCat>;
}
