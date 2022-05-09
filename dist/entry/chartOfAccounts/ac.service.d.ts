import { AC } from './models/ac.model';
import { AcDto } from './dto/ac.dto';
export declare class AcService {
    private readonly AcModel;
    constructor(AcModel: typeof AC);
    create(acDto: AcDto): Promise<AC>;
    update(acode: string, acDto: AcDto): Promise<any>;
    findAll(): Promise<AC[]>;
    findOne(acode: string): Promise<AC>;
    findById(idno: number): Promise<AC>;
    remove(idno: number): Promise<AC>;
}
