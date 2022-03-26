import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
