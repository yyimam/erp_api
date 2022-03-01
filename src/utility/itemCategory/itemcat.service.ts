import { ItemCat } from './models/itemcat.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemCatDto } from './dto/create-itemcat.dto';
import { where } from 'sequelize/dist';

@Injectable()
export class ItemCatService {
  constructor(
    @InjectModel(ItemCat)
    private readonly ItemCatModel: typeof ItemCat,
  ) {}

  create(CreateItemCatDto: CreateItemCatDto): Promise<ItemCat> {
    let t:{}= CreateItemCatDto
    return this.ItemCatModel.create(t);
  }

  async update(code: string, UpdateItemCatDto: CreateItemCatDto): Promise<any>{
    let t:{}= UpdateItemCatDto;
    return await this.ItemCatModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemCat[]> {
    return this.ItemCatModel.findAll();
  }

  findOne(code: string): Promise<ItemCat> {
    return this.ItemCatModel.findOne({
      where: {
        code,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
