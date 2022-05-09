import { ItemUnit } from './models/itemUnit.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemUnitDto } from './dto/create-itemUnit.dto';

@Injectable()
export class ItemUnitService {
  constructor(
    @InjectModel(ItemUnit)
    private readonly ItemUnitModel: typeof ItemUnit,
  ) {}

  async create(CreateItemUnitDto: CreateItemUnitDto): Promise<ItemUnit> {
    let t:{}= CreateItemUnitDto
    return await this.ItemUnitModel.create(t);
  }

  async update(code: string, UpdateItemUnitDto: CreateItemUnitDto): Promise<any>{
    let t:{}= UpdateItemUnitDto;
    return await this.ItemUnitModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<ItemUnit[]> {
    return await this.ItemUnitModel.findAll();
  }

  async findOne(code: string): Promise<ItemUnit> {
    return await this.ItemUnitModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<ItemUnit> {
    return await this.ItemUnitModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(code: string): Promise<ItemUnit> {
    const res = await this.findOne(code);
    let u = await res.destroy().then(t => t);
    return res;
  }
  
}
