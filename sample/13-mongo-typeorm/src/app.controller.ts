import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    async nothing() {
        return '好啊儿子'
    }
}
