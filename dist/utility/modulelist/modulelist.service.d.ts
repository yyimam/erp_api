import { ModuleList } from './models/modulelist.model';
import { CreateModuleListDto } from './dto/create-modulelist.dto';
export declare class ModuleListService {
    private readonly ModuleListModel;
    inc: any;
    constructor(ModuleListModel: typeof ModuleList);
    create(CreateModuleListDto: CreateModuleListDto): Promise<ModuleList>;
    update(code: string, UpdateModuleListDto: CreateModuleListDto): Promise<any>;
    findAll(id: string): Promise<ModuleList[]>;
    findOne(code: string): Promise<ModuleList>;
    remove(id: string): Promise<void>;
}
