import { finishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListController } from './finishGoodsRecipeList.controllers';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([finishGoodsRecipeList])],
  controllers: [finishGoodsRecipeListController],
  providers: [finishGoodsRecipeListService],
})

export class finishGoodsRecipeListModule {}