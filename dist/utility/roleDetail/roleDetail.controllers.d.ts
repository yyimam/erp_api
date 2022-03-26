import { CreateRoleDetailDto } from './dto/create-roleDetail.dto';
import { RoleDetail } from './models/roleDetail.model';
import { RoleDetailService } from './roleDetail.service';
import { Response } from 'express';
export declare class RoleDetailController {
    private readonly RoleDetailsService;
    constructor(RoleDetailsService: RoleDetailService);
    create(createRoleDetailDto: CreateRoleDetailDto, res: Response): Promise<void | RoleDetail>;
    update(code: string, updateRoleDetailDto: CreateRoleDetailDto, res: Response): void;
    findAll(): Promise<RoleDetail[]>;
    findOne(code: string): Promise<RoleDetail>;
    remove(code: string): Promise<void>;
}
