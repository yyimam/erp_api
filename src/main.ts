import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true}); 
  app.setGlobalPrefix('/api/');
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
