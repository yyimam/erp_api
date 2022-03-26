import { BrandList } from './models/brandList.model';
import { CreateBrandListDto } from './dto/create-BrandList.dto';
export declare class BrandListService {
    private readonly BrandListModel;
    constructor(BrandListModel: typeof BrandList);
    create(CreateBrandListDto: CreateBrandListDto): Promise<BrandList>;
    update(code: string, UpdateBrandListDto: CreateBrandListDto): Promise<any>;
    findAll(): Promise<BrandList[]>;
    findOne(code: string): Promise<BrandList>;
    findById(id: number): Promise<BrandList>;
    remove(id: string): Promise<void>;
}
