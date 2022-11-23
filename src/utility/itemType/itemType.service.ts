import { ItemType } from './models/itemType.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemTypeDto } from './dto/create-itemType.dto';

@Injectable()
export class ItemTypeService {
  constructor(
    @InjectModel(ItemType)
    private readonly ItemTypeModel: typeof ItemType,
  ) {}

  async create(CreateItemTypeDto: CreateItemTypeDto): Promise<ItemType> {
    let t:{}= CreateItemTypeDto
    return await this.ItemTypeModel.create(t);
  }

  async update(code: string, UpdateItemTypeDto: CreateItemTypeDto): Promise<any>{
    let t:{}= UpdateItemTypeDto;
    return await this.ItemTypeModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemType[]> {
    return await this.ItemTypeModel.findAll();
  }

  async findOne(code: string): Promise<ItemType> {
    return await this.ItemTypeModel.findOne({
      where: {
        code,
      },
    });
  }

  async remove(id: string): Promise<ItemType> {
    const type = await this.findOne(id);
    let u = await type.destroy().then(t => t);
    return type;
  }
  
}
