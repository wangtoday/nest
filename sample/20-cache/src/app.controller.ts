import {
    CacheInterceptor,
    Controller,
    Get,
    UseInterceptors,
} from '@nestjs/common';
import {CacheKey, SetTTL } from './common/ttl.doc';

@Controller('/gaoyixia')
@UseInterceptors(CacheInterceptor)
export class AppController {
    @Get()
    @CacheKey('aoaojiao')
    @SetTTL(10)
    findAll() {
        console.log('这个地方是我们的 get all controller 的handler')
        return [{id: 1, name: 'Nes就看见了看t'}];
    }
}
