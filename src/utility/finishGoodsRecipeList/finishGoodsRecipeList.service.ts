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
    return await this.FinishGoodsRecipeMasterModel.create(t, {
      include: [FinishGoodsRecipeList, Product]
    })
      .then(t => t.reload().then(t => t))
      .catch(err => err);
  }

  async update(code: string, UpdatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<any> {
    let t: any = UpdatefinishGoodsRecipeListDto;
    return await this.FinishGoodsRecipeListModel.bulkCreate(t.finishGoodsRecipeList, { individualHooks: true, updateOnDuplicate: ["description", "disabled", "entryno", "mainitemcode", "qty", "subitemcode"] })
      .then(t => t)
      .catch(err => err);
  }


  async findAll(): Promise<FinishGoodsRecipeMaster[]> {
    return await this.FinishGoodsRecipeMasterModel.findAll({
      include: [Product, FinishGoodsRecipeList]
    });
  }

  async findOne(code: string): Promise<FinishGoodsRecipeMaster> {
    return await this.FinishGoodsRecipeMasterModel.findOne({
      include: [FinishGoodsRecipeList, Product],
      where: { mainitemcode: code }
    });
  }

  async getBomTreeView(mainitemcode: number): Promise<any> {
    return await this.FinishGoodsRecipeMasterModel.findOne({
      include: [
        { model: Product, attributes: [['name', 'label'], ['code', 'value']] },
        { model: FinishGoodsRecipeList, 
          include: [
            { model: Product,  as: 'subitemcode1', attributes: [['name', 'label'], ['code', 'value']] },
            { model: Product,  as: 'mainitemcode1', attributes: [['name', 'label'], ['code', 'value']] },
            { model: FinishGoodsRecipeList,  as: 'subitemCodeList2', attributes: ['idno','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'] }
        ],
           attributes: ['idno','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'] }
      ],
      attributes: ['idno','mainitemcode','description', ],
      where: { mainitemcode }
      // include: [
      //     { model: FinishGoodsRecipeList, as: '_subitemcode', attributes: ['id','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'] }
      //   ],
      //   attributes: ['id','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'],
      //   where: { subitemcode: mainitemcode }
      // include: [
      //   { model: FinishGoodsRecipeList, as: '_subitemcode', attributes: ['id','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'] }
      // ],
      // attributes: ['id','mainitemcode', 'subitemcode', 'qty', 'wastage_qty'],
      // where: { subitemcode: mainitemcode }
    })


    // where: { mainitemcode }

    // })
    // return await this.FinishGoodsRecipeMasterModel.findAll({
    //   include: [
    //     {model:FinishGoodsRecipeList , include:[
    //       {model:FinishGoodsRecipeList, as:'_subitemcode',  attributes:['id','mainitemcode','subitemcode', 'qty', 'wastage_qty']}
    //     ], 
    //     attributes:['id','mainitemcode','subitemcode', 'qty', 'wastage_qty']}
    //   ],
    //   where: { mainitemcode }
    // })

  }

  async remove(code: string): Promise<FinishGoodsRecipeMaster> {
    const rec = await this.findOne(code);
    let u = await rec.destroy().then(t => t);
    return rec;

  }
}
