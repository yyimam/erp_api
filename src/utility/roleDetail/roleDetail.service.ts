import { RoleDetail } from './models/roleDetail.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDetailDto } from './dto/create-roleDetail.dto';
import { where } from 'sequelize/dist';

@Injectable()
export class RoleDetailService {
  constructor(
    @InjectModel(RoleDetail)
    private readonly RoleDetailModel: typeof RoleDetail,
  ) {}

  async create(CreateRoleDetailDto: CreateRoleDetailDto): Promise<RoleDetail> {
    let t:{}= CreateRoleDetailDto
    return this.RoleDetailModel.create(t);
  }

  async update(code: string, UpdateRoleDetailDto: CreateRoleDetailDto): Promise<any>{
    let t:{}= UpdateRoleDetailDto;
    return await this.RoleDetailModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<RoleDetail[]> {
    return this.RoleDetailModel.findAll();
  }

  async findOne(code: string): Promise<RoleDetail> {
    return this.RoleDetailModel.findOne({
      where: {
        code,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
