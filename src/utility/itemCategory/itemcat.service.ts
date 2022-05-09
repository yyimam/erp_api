import { ItemCat } from './models/itemcat.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemCatDto } from './dto/create-itemcat.dto';

@Injectable()
export class ItemCatService {
  constructor(
    @InjectModel(ItemCat)
    private readonly ItemCatModel: typeof ItemCat,
  ) {}

  async create(CreateItemCatDto: CreateItemCatDto): Promise<ItemCat> {
    let t:any = CreateItemCatDto
    return await this.ItemCatModel.create(t);
  }

  async update(code: string, UpdateItemCatDto: CreateItemCatDto): Promise<any>{
    let t:{}= UpdateItemCatDto;
    return await this.ItemCatModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemCat[]> {
    return await this.ItemCatModel.findAll();
  }

  async findOne(code: string): Promise<ItemCat> {
    return await this.ItemCatModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<ItemCat> {
    return await this.ItemCatModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(code: string): Promise<ItemCat> {
    const rec = await this.findOne(code);
    await rec.destroy().then( t => t);
    return rec;
  }
}
