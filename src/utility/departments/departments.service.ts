import { Departments } from './models/departments.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DepartmentsDto } from './dto/departments.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Departments)
    private readonly DepartmentsModel: typeof Departments,
  ) {}

  async create(DepartmentsDto: DepartmentsDto): Promise<Departments> {
    let t:any = DepartmentsDto
    return await this.DepartmentsModel.create(t);
  }

  async update(code: string, UpdateDepartmentsDto: DepartmentsDto): Promise<any>{
    let t:{}= UpdateDepartmentsDto;
    return await this.DepartmentsModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<Departments[]> {
    return await this.DepartmentsModel.findAll();
  }

  async findOne(code: string): Promise<Departments> {
    return await this.DepartmentsModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<Departments> {
    return await this.DepartmentsModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(code: string): Promise<Departments> {
    const rec = await this.findOne(code);
    await rec.destroy().then( t => t);
    return rec;
  }
}
