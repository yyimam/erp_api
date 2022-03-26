import { ItemType } from './models/ItemType.model';
import { CreateItemTypeDto } from './dto/create-ItemType.dto';
export declare class ItemTypeService {
    private readonly ItemTypeModel;
    constructor(ItemTypeModel: typeof ItemType);
    create(CreateItemTypeDto: CreateItemTypeDto): Promise<ItemType>;
    update(code: string, UpdateItemTypeDto: CreateItemTypeDto): Promise<any>;
    findAll(): Promise<ItemType[]>;
    findOne(code: string): Promise<ItemType>;
    remove(id: string): Promise<void>;
}
