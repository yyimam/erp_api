import { CreateModuleListDto } from './dto/create-modulelist.dto';
import { ModuleList } from './models/modulelist.model';
import { ModuleListService } from './modulelist.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('Navigation')
export class ModuleListController {
  constructor(private readonly ModuleListsService: ModuleListService) {}

  @Post()
  async create(@Body() createModuleListDto: CreateModuleListDto, @Res() res: Response): Promise<void | ModuleList> {
    await this.ModuleListsService.create(createModuleListDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':id')
  async update(@Param('id') code: string,@Body() updateModuleListDto: CreateModuleListDto, @Res() res: Response) {
    await this.ModuleListsService.update(code,updateModuleListDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':id')
  async findAll(@Param('id') id: string): Promise<ModuleList[]> {
    return await this.ModuleListsService.findAll(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<ModuleList> {
  //   return this.ModuleListsService.findOne(id);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.ModuleListsService.remove(id);
  }
  
}
