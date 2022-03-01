import { Product } from './models/product.model';
import { ProductsController } from './products.controllers';
import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})

export class ProductsModule {}