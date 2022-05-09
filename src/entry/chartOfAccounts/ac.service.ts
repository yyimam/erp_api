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

  async create(acDto: AcDto): Promise<AC> {
    let t:{}= acDto
    return this.AcModel.create(t);
  }

  async update(acode: string, acDto: AcDto): Promise<any>{
    let t:{}= acDto;
    return await this.AcModel.update(t,{where:{acode:acode}});
  }

  async findAll(): Promise<AC[]> {
    return this.AcModel.findAll();
  }

  async findOne(acode: string): Promise<AC> {
    return this.AcModel.findOne({
      where: {
        acode,
      },
    });
  }

  async findById(idno: number): Promise<AC> {
    return this.AcModel.findOne({
      where: {
        idno,
      },
    });
  }

  async remove(idno: number): Promise<AC> {
    const rec = await this.findById(idno);
    let u:any;
    if(rec){
       u = await rec.destroy().then(t => t);
    }
    return u;
  }
}
