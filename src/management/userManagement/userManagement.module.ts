import { JwtStrategy } from './../../auth/jwt.strategy';
import { UserManagement } from './models/userManagement.model';
import { UserManagementController } from './userManagement.controllers';
import { UserManagementService } from './userManagement.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../auth/constants';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([UserManagement]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService,LocalStrategy,JwtStrategy],
  exports:[UserManagementService]
})

export class UserManagementModule { }