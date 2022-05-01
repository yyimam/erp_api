import { Product } from './../products/models/product.model';
import { FinishGoodsRecipeMaster } from './../../entities/finishGoodsRecipeMaster.model';
import { FinishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';

@Injectable()
export class finishGoodsRecipeListService {
  constructor(
    @InjectModel(FinishGoodsRecipeMaster)
    private readonly FinishGoodsRecipeMasterModel: typeof FinishGoodsRecipeMaster,
    @InjectModel(FinishGoodsRecipeList)
    private readonly FinishGoodsRecipeListModel: typeof FinishGoodsRecipeList
  ) { }

  async create(CreatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<FinishGoodsRecipeMaster> {
    let t: any = CreatefinishGoodsRecipeListDto
    return this.FinishGoodsRecipeMasterModel.create(t, {
      include: [FinishGoodsRecipeList, Product]
    })
      .then(t => t.reload().then(t => t))
      .catch(err => err);
  }

  async update(code: string, UpdatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<any> {
    let t: any = UpdatefinishGoodsRecipeListDto;
    return this.FinishGoodsRecipeListModel.bulkCreate(t.finishGoodsRecipeList, { individualHooks: true, updateOnDuplicate: ["description", "disabled", "entryno", "mainitemcode", "qty", "subitemcode"] })
      .then(t => t)
      .catch(err => err);
  }


  async findAll(): Promise<FinishGoodsRecipeMaster[]> {
    return this.FinishGoodsRecipeMasterModel.findAll({
      include: [Product, FinishGoodsRecipeList]
    });
  }

  async findOne(code: string): Promise<FinishGoodsRecipeMaster> {
    return this.FinishGoodsRecipeMasterModel.findOne({
      include: [FinishGoodsRecipeList, Product],
      where: { mainitemcode: code }
    });
  }

  async remove(code: string): Promise<FinishGoodsRecipeMaster> {
    const rec = await this.findOne(code);
    let u = await rec.destroy().then(t => t);
    return rec;

  }
}
