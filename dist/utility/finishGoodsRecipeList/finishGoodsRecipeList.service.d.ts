import { FinishGoodsRecipeMaster } from './../../entities/finishGoodsRecipeMaster.model';
import { FinishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
export declare class finishGoodsRecipeListService {
    private readonly FinishGoodsRecipeMasterModel;
    private readonly FinishGoodsRecipeListModel;
    constructor(FinishGoodsRecipeMasterModel: typeof FinishGoodsRecipeMaster, FinishGoodsRecipeListModel: typeof FinishGoodsRecipeList);
    create(CreatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<FinishGoodsRecipeMaster>;
    update(code: string, UpdatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<any>;
    findAll(): Promise<FinishGoodsRecipeMaster[]>;
    findOne(code: string): Promise<FinishGoodsRecipeMaster>;
    getBomTreeView(mainitemcode: number): Promise<any>;
    remove(code: string): Promise<FinishGoodsRecipeMaster>;
}
