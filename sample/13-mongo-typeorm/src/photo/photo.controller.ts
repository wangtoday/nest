import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {
    console.log('photo  controller init')
  }

  @Get()
  findAll(): Promise<Photo[]> {
    console.log('get photos::')
    return this.photoService.findAll();
  }
}
