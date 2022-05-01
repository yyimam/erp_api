import { ModuleList } from './models/modulelist.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateModuleListDto } from './dto/create-modulelist.dto';
import { RoleDetail } from '../roleDetail/models/roleDetail.model';
import {Op,literal} from "sequelize";


@Injectable()
export class ModuleListService {
  inc: any = ["dependent","serialNo","menus","modulename","moduletype",[ literal('`roleDetail`.`can_access`'),'canAccess'],[literal('`roleDetail`.`can_add`'),"canAdd"],[literal('`roleDetail`.`can_edit`'),"canEdit"],[literal('`roleDetail`.`can_delete`'),"canDelete"],[literal('`roleDetail`.`can_print`'),"canPrint"],[literal('`roleDetail`.`can_docs`'),"canDocs"] ];
  constructor(
    @InjectModel(ModuleList)
    private readonly ModuleListModel: typeof ModuleList,
  ) {}

  async create(CreateModuleListDto: CreateModuleListDto): Promise<ModuleList> {
    let t:{}= CreateModuleListDto
    return this.ModuleListModel.create(t);
  }

  async update(code: string, UpdateModuleListDto: CreateModuleListDto): Promise<any>{
    let t:{}= UpdateModuleListDto;
    return await this.ModuleListModel.update(t,{where:{code:code}});
  }

  async findAll(id: string): Promise<ModuleList[]> {
    return this.ModuleListModel.findAll({
      include:{model: RoleDetail},
      order: [['serialNo','ASC']],
      where: {
        [Op.or]: [
          { '$roleDetail.roleid$': id },
          { '$moduleList.modulenature$': 'menu' }
        ]
      },
      attributes: { include:  this.inc }
    });
  }

  async findOne(code: string): Promise<ModuleList> {
    return this.ModuleListModel.findOne({
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
