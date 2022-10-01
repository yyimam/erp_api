import { OpeningStock } from './models/openingStock.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OpeningStockDto } from './dto/openingStock.dto';

@Injectable()
export class OpeningStockService {
  constructor(
    @InjectModel(OpeningStock)
    private readonly OpeningStockModel: typeof OpeningStock,
  ) {}

  async create(OpeningStockDto: OpeningStockDto): Promise<OpeningStock> {
    let t:{}= OpeningStockDto
    return await this.OpeningStockModel.create(t);
  }

  async update(code: string, UpdateOpeningStockDto: OpeningStockDto): Promise<any>{
    let t:{}= UpdateOpeningStockDto;
    return await this.OpeningStockModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<OpeningStock[]> {
    
    return await this.OpeningStockModel.findAll({
      where: {
        estatus: 'OS'
      }
    });
  }

  async findOne(code: string): Promise<OpeningStock> {
    return await this.OpeningStockModel.findOne({
      where: {
        code,
      },
    });
  }

  async remove(id: string): Promise<OpeningStock> {
    const type = await this.findOne(id);
    let u = await type.destroy().then(t => t);
    return type;
  }
  
}
