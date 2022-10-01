import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email.toLowerCase().trim());
    const result = await bcrypt.compare(password, user.userpwd.toString());
    if (result) {
      const { userpwd, ...result } = user.dataValues;
      return result;
    }
    return { message: "Incorrect username or password", data: {} }

  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}