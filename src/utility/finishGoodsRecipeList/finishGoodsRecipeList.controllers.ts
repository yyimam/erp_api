import { CreatefinishGoodsRecipeListDto } from './dto/create-finishGoodsRecipeList.dto';
import { finishGoodsRecipeList } from './models/finishGoodsRecipeList.model';
import { finishGoodsRecipeListService } from './finishGoodsRecipeList.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { Console } from 'console';

@Controller('assembling-list')
export class finishGoodsRecipeListController {
  constructor(private readonly finishGoodsRecipeListsService: finishGoodsRecipeListService) {}

  @Post()
  create(@Body() createfinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto[], @Res() res: Response): Promise<void | finishGoodsRecipeList> {
    
    return this.finishGoodsRecipeListsService.create(createfinishGoodsRecipeListDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updatefinishGoodsRecipeListDto: CreatefinishGoodsRecipeListDto, @Res() res: Response) {
    this.finishGoodsRecipeListsService.update(code,updatefinishGoodsRecipeListDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated", record:rec});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':code')
  findAll(@Param('code') code: string): Promise<finishGoodsRecipeList[]> {
    return this.finishGoodsRecipeListsService.findAll(code);
  }

  // @Get(':code')
  // findOne(@Param('code') code: string): Promise<finishGoodsRecipeList> {
  //   return this.finishGoodsRecipeListsService.findOne(code);
  // }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.finishGoodsRecipeListsService.remove(code);
  }
  
}
