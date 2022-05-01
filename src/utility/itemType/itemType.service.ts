import { ItemType } from './models/ItemType.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemTypeDto } from './dto/create-ItemType.dto';
import { where } from 'sequelize/dist';

@Injectable()
export class ItemTypeService {
  constructor(
    @InjectModel(ItemType)
    private readonly ItemTypeModel: typeof ItemType,
  ) {}

  async create(CreateItemTypeDto: CreateItemTypeDto): Promise<ItemType> {
    let t:{}= CreateItemTypeDto
    return this.ItemTypeModel.create(t);
  }

  async update(code: string, UpdateItemTypeDto: CreateItemTypeDto): Promise<any>{
    let t:{}= UpdateItemTypeDto;
    return await this.ItemTypeModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemType[]> {
    return this.ItemTypeModel.findAll();
  }

  async findOne(code: string): Promise<ItemType> {
    return this.ItemTypeModel.findOne({
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
