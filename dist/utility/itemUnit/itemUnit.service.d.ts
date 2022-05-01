import { ItemUnit } from './models/itemUnit.model';
import { CreateItemUnitDto } from './dto/create-itemUnit.dto';
export declare class ItemUnitService {
    private readonly ItemUnitModel;
    constructor(ItemUnitModel: typeof ItemUnit);
    create(CreateItemUnitDto: CreateItemUnitDto): Promise<ItemUnit>;
    update(code: string, UpdateItemUnitDto: CreateItemUnitDto): Promise<any>;
    findAll(): Promise<ItemUnit[]>;
    findOne(code: string): Promise<ItemUnit>;
    findById(id: number): Promise<ItemUnit>;
    remove(code: string): Promise<ItemUnit>;
}
