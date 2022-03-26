import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
import { finishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Response } from 'express';
export declare class finishGoodsRecipeListController {
    private readonly finishGoodsRecipeListsService;
    constructor(finishGoodsRecipeListsService: finishGoodsRecipeListService);
    create(createfinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto[], res: Response): Promise<void | finishGoodsRecipeList>;
    update(code: string, updatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, res: Response): void;
    findAll(code: string): Promise<finishGoodsRecipeList[]>;
    remove(code: string): Promise<void>;
}
