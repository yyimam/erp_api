import { CreateModuleListDto } from './dto/create-modulelist.dto';
import { ModuleList } from './models/modulelist.model';
import { ModuleListService } from './modulelist.service';
import { Response } from 'express';
export declare class ModuleListController {
    private readonly ModuleListsService;
    constructor(ModuleListsService: ModuleListService);
    create(createModuleListDto: CreateModuleListDto, res: Response): Promise<void | ModuleList>;
    update(code: string, updateModuleListDto: CreateModuleListDto, res: Response): Promise<void>;
    findAll(id: string): Promise<ModuleList[]>;
    remove(id: string): Promise<void>;
}
