import { AC } from './models/ac.model';
import { AcDto } from './dto/ac.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AcService {
  constructor(
    @InjectModel(AC)
    private readonly AcModel: typeof AC,
  ) {}

  create(acDto: AcDto): Promise<AC> {
    let t:{}= acDto
    return this.AcModel.create(t);
  }

  async update(code: string, acDto: AcDto): Promise<any>{
    let t:{}= acDto;
    return await this.AcModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<AC[]> {
    return this.AcModel.findAll();
  }

  async findOne(code: string): Promise<AC> {
    return this.AcModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<AC> {
    return this.AcModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<AC> {
    const brand = await this.findOne(id);
    let u = await brand.destroy().then(t => t);
    return brand;
  }
}
