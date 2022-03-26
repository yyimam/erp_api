import { WarehouseList } from './models/warehouseList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';
import { where } from 'sequelize/dist';
import { randomNumber } from 'src/helper/helper.service';

@Injectable()
export class WarehouseListService {
  constructor(
    @InjectModel(WarehouseList)
    private readonly WarehouseListModel: typeof WarehouseList,
  ) {}

  create(CreateWarehouseListDto: CreateWarehouseListDto): Promise<WarehouseList> {
    let t:any = CreateWarehouseListDto
    return this.WarehouseListModel.create(t);
  }

  async update(code: string, UpdateWarehouseListDto: CreateWarehouseListDto): Promise<any>{
    let t:{}= UpdateWarehouseListDto;
    return await this.WarehouseListModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<WarehouseList[]> {
    return this.WarehouseListModel.findAll();
  }

  findOne(code: string): Promise<WarehouseList> {
    return this.WarehouseListModel.findOne({
      where: {
        code,
      },
    });
  }

  findById(id: number): Promise<WarehouseList> {
    return this.WarehouseListModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(code: string): Promise<WarehouseList> {
    const user = await this.findOne(code);
    let u = await user.destroy().then(t => t);
    return user;
  }
}
