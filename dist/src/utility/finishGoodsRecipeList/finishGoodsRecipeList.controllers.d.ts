import { FinishGoodsRecipeMaster } from './../../entities/finishGoodsRecipeMaster.model';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
import { FinishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Response } from 'express';
export declare class finishGoodsRecipeListController {
    private readonly finishGoodsRecipeListsService;
    constructor(finishGoodsRecipeListsService: finishGoodsRecipeListService);
    create(createfinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, res: Response): Promise<void | FinishGoodsRecipeList>;
    update(code: string, updatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, res: Response): void;
    findAll(): Promise<FinishGoodsRecipeMaster[]>;
    findOne(code: string): Promise<FinishGoodsRecipeMaster>;
    remove(code: string, res: Response): Promise<void | FinishGoodsRecipeMaster>;
}
