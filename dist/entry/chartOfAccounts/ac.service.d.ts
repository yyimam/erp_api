import { AC } from './models/ac.model';
import { AcDto } from './dto/ac.dto';
export declare class AcService {
    private readonly AcModel;
    constructor(AcModel: typeof AC);
    create(acDto: AcDto): Promise<AC>;
    update(code: string, acDto: AcDto): Promise<any>;
    findAll(): Promise<AC[]>;
    findOne(code: string): Promise<AC>;
    findById(id: number): Promise<AC>;
    remove(id: string): Promise<AC>;
}
