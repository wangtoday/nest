import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test',
      entities: [Photo],
      synchronize: true,
    }),
    PhotoModule,
  ],
  // controllers:[AppController]
})
export class AppModule {}
