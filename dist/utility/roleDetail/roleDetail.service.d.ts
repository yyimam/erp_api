import { RoleDetail } from './models/roleDetail.model';
import { CreateRoleDetailDto } from './dto/create-roleDetail.dto';
export declare class RoleDetailService {
    private readonly RoleDetailModel;
    constructor(RoleDetailModel: typeof RoleDetail);
    create(CreateRoleDetailDto: CreateRoleDetailDto): Promise<RoleDetail>;
    update(code: string, UpdateRoleDetailDto: CreateRoleDetailDto): Promise<any>;
    findAll(): Promise<RoleDetail[]>;
    findOne(code: string): Promise<RoleDetail>;
    remove(id: string): Promise<void>;
}
