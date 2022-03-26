import { finishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
export declare class finishGoodsRecipeListService {
    private readonly finishGoodsRecipeListModel;
    constructor(finishGoodsRecipeListModel: typeof finishGoodsRecipeList);
    create(CreatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto[]): Promise<finishGoodsRecipeList[]>;
    update(code: string, UpdatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<any>;
    findAll(idno: string): Promise<finishGoodsRecipeList[]>;
    findOne(code: string): Promise<finishGoodsRecipeList>;
    remove(id: string): Promise<void>;
}
