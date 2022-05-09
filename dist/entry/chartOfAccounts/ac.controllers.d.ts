import { AcDto } from './dto/ac.dto';
import { AC } from './models/ac.model';
import { AcService } from './ac.service';
import { Response } from 'express';
export declare class AcController {
    private readonly AcService;
    constructor(AcService: AcService);
    create(acDto: AcDto, res: Response): Promise<void | AC>;
    update(code: string, acDto: AcDto, res: Response): Promise<void>;
    findAll(): Promise<AC[]>;
    findOne(code: string): Promise<AC>;
    remove(id: number, res: Response): Promise<void | AC>;
}
