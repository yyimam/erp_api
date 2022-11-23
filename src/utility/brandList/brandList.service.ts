import { BrandList } from './models/brandList.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBrandListDto } from './dto/create-brandList.dto';

@Injectable()
export class BrandListService {
  constructor(
    @InjectModel(BrandList)
    private readonly BrandListModel: typeof BrandList,
  ) {}

  async create(CreateBrandListDto: CreateBrandListDto): Promise<BrandList> {
    let t:{}= CreateBrandListDto
    return await this.BrandListModel.create(t);
  }

  async update(code: string, UpdateBrandListDto: CreateBrandListDto): Promise<any>{
    let t:{}= UpdateBrandListDto;
    return await this.BrandListModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<BrandList[]> {
    try {
      return await this.BrandListModel.findAll();  
    } catch (error) {
      console.log("error check", error);
      throw error;
    }
    
  }

  async findOne(code: string): Promise<BrandList> {
    return await this.BrandListModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<BrandList> {
    return await this.BrandListModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<BrandList> {
    const brand = await this.findOne(id);
    let u = await brand.destroy().then(t => t);
    return brand;
  }
}
