import { ModuleList } from './models/modulelist.model';
import { ModuleListController } from './modulelist.controllers';
import { ModuleListService } from './modulelist.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ModuleList])],
  controllers: [ModuleListController],
  providers: [ModuleListService],
})

export class ModuleListModule {}