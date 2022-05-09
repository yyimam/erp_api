import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'admin@halfmanengineering.com',
      password: 'pass@work1',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
    {
      userId: 2,
      email: 'admin',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}