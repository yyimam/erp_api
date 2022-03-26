import { BrandList } from './models/brandList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBrandListDto } from './dto/create-BrandList.dto';
import { where } from 'sequelize/dist';

@Injectable()
export class BrandListService {
  constructor(
    @InjectModel(BrandList)
    private readonly BrandListModel: typeof BrandList,
  ) {}

  create(CreateBrandListDto: CreateBrandListDto): Promise<BrandList> {
    let t:{}= CreateBrandListDto
    return this.BrandListModel.create(t);
  }

  async update(code: string, UpdateBrandListDto: CreateBrandListDto): Promise<any>{
    let t:{}= UpdateBrandListDto;
    return await this.BrandListModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<BrandList[]> {
    return this.BrandListModel.findAll();
  }

  findOne(code: string): Promise<BrandList> {
    return this.BrandListModel.findOne({
      where: {
        code,
      },
    });
  }

  findById(id: number): Promise<BrandList> {
    return this.BrandListModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
