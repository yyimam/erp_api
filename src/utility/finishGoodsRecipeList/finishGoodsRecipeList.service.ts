import { finishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
import { where } from 'sequelize/dist';

@Injectable()
export class finishGoodsRecipeListService {
  constructor(
    @InjectModel(finishGoodsRecipeList)
    private readonly finishGoodsRecipeListModel: typeof finishGoodsRecipeList,
  ) {}

  create(CreatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto[]): Promise<finishGoodsRecipeList[]> {
    let t:any= CreatefinishGoodsRecipeListDto
    
    return this.finishGoodsRecipeListModel.bulkCreate(t);
  }

  async update(code: string, UpdatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto): Promise<any>{
    let t: any = UpdatefinishGoodsRecipeListDto;
    return this.finishGoodsRecipeListModel.bulkCreate(t,{updateOnDuplicate:["mainitemcode","subitemcode","qty","wastage_qty"]});
  }

  async findAll(idno: string): Promise<finishGoodsRecipeList[]> {
    return this.finishGoodsRecipeListModel.findAll({
      where: {
        mainitemcode:idno,
      },
    });
  }

  findOne(code: string): Promise<finishGoodsRecipeList> {
    return this.finishGoodsRecipeListModel.findOne({
      where: {
        code,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.finishGoodsRecipeListModel.destroy({
      where: {
        mainitemcode:id,
      },
    });
  }
}
