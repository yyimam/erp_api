import { WarehouseList } from './models/warehouseList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';

@Injectable()
export class WarehouseListService {
  constructor(
    @InjectModel(WarehouseList)
    private readonly WarehouseListModel: typeof WarehouseList,
  ) {}

  async create(CreateWarehouseListDto: CreateWarehouseListDto): Promise<WarehouseList> {
    let t:any = CreateWarehouseListDto
    return await this.WarehouseListModel.create(t);
  }

  async update(code: string, UpdateWarehouseListDto: CreateWarehouseListDto): Promise<any>{
    let t:{}= UpdateWarehouseListDto;
    return await this.WarehouseListModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<WarehouseList[]> {
    return this.WarehouseListModel.findAll();
  }

  async findOne(code: string): Promise<WarehouseList> {
    return await this.WarehouseListModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<WarehouseList> {
    return await this.WarehouseListModel.findOne({
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
