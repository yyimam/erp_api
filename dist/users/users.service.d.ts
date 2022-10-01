import { UserManagement } from '../utility/management/userManagement/models/userManagement.model';
export declare type User = any;
export declare class UsersService {
    private readonly UserManagementModel;
    private readonly users;
    constructor(UserManagementModel: typeof UserManagement);
    findOne(email: string): Promise<User | undefined>;
}
