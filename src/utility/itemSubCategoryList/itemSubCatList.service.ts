import { ItemSubCatList } from './models/itemSubCatList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemSubCatListDto } from './dto/create-itemSubCatList.dto';

@Injectable()
export class ItemSubCatListService {
  constructor(
    @InjectModel(ItemSubCatList)
    private readonly ItemSubCatListModel: typeof ItemSubCatList,
  ) {}

  async create(CreateItemSubCatListDto: CreateItemSubCatListDto): Promise<ItemSubCatList> {
    let t:{}= CreateItemSubCatListDto
    return await this.ItemSubCatListModel.create(t);
  }

  async update(code: string, UpdateItemSubCatListDto: CreateItemSubCatListDto): Promise<any>{
    let t:{}= UpdateItemSubCatListDto;
    return await this.ItemSubCatListModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemSubCatList[]> {
    return await this.ItemSubCatListModel.findAll();
  }

  async findOne(code: string): Promise<ItemSubCatList> {
    return await this.ItemSubCatListModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<ItemSubCatList> {
    return await this.ItemSubCatListModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(code: string): Promise<ItemSubCatList> {
    const rec = await this.findOne(code);
    let u = await rec.destroy().then(t => t);
    return rec;
  }
}
