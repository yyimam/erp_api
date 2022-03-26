import { WarehouseList } from './models/warehouseList.model';
import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';
export declare class WarehouseListService {
    private readonly WarehouseListModel;
    constructor(WarehouseListModel: typeof WarehouseList);
    create(CreateWarehouseListDto: CreateWarehouseListDto): Promise<WarehouseList>;
    update(code: string, UpdateWarehouseListDto: CreateWarehouseListDto): Promise<any>;
    findAll(): Promise<WarehouseList[]>;
    findOne(code: string): Promise<WarehouseList>;
    findById(id: number): Promise<WarehouseList>;
    remove(code: string): Promise<WarehouseList>;
}
