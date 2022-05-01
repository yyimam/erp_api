import { Product } from './../products/models/product.model';
import { FinishGoodsRecipeMaster } from './../../entities/finishGoodsRecipeMaster.model';
import { FinishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListController } from './finishGoodsRecipeList.controllers';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([FinishGoodsRecipeMaster]),SequelizeModule.forFeature([FinishGoodsRecipeList]),SequelizeModule.forFeature([Product])],
  controllers: [finishGoodsRecipeListController],
  providers: [finishGoodsRecipeListService],
})

export class finishGoodsRecipeListModule {}