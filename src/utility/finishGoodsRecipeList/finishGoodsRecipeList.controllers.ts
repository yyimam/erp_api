import { FinishGoodsRecipeMaster } from './../../entities/finishGoodsRecipeMaster.model';
import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
import { FinishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { Console } from 'console';

@Controller('finish-goods-recipe-list')
export class finishGoodsRecipeListController {
  constructor(private readonly finishGoodsRecipeListsService: finishGoodsRecipeListService) {}

  @Post()
  async create(@Body() createfinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, @Res() res: Response): Promise<void | FinishGoodsRecipeList> {
    await this.finishGoodsRecipeListsService.create(createfinishGoodsRecipeListDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, @Res() res: Response) {
    this.finishGoodsRecipeListsService.update(code,updatefinishGoodsRecipeListDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated", data:rec});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send({message: "Error", data:err.parent});
    });    
  }
  
  @Get()
  async findAll(): Promise<FinishGoodsRecipeMaster[]> {
    return this.finishGoodsRecipeListsService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<FinishGoodsRecipeMaster> {
    return this.finishGoodsRecipeListsService.findOne(code);
  }

  
  @Get('bom-tree-view/:code')
  async getBomTreeView(@Param('code') code: number): Promise<any> {
    return await this.finishGoodsRecipeListsService.getBomTreeView(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string , @Res() res: Response): Promise<void | FinishGoodsRecipeMaster> {
    return this.finishGoodsRecipeListsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }
  
}
