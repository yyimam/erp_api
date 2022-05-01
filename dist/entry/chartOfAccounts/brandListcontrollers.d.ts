import { CreateBrandListDto } from './dto/create-brandList.dto';
import { BrandList } from './models/brandList.model';
import { BrandListService } from './BrandList.service';
import { Response } from 'express';
export declare class BrandListController {
    private readonly BrandListsService;
    constructor(BrandListsService: BrandListService);
    create(createBrandListDto: CreateBrandListDto, res: Response): Promise<void | BrandList>;
    update(code: string, updateBrandListDto: CreateBrandListDto, res: Response): Promise<void>;
    findAll(): Promise<BrandList[]>;
    findOne(code: string): Promise<BrandList>;
    remove(code: string, res: Response): Promise<void | BrandList>;
}
