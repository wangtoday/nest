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
      url:'notion上有信息',
      replicaSet:'atlas-kcykj5-shard-0',
      authSource:'admin',
      database: 'wang',
      ssl: true,
      entities: [Photo],
      synchronize: true,
    }),
    PhotoModule,
  ],
  // controllers:[AppController]
})
export class AppModule {}
