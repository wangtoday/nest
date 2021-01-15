import {CacheModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';

import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [ CacheModule.register({
        store: redisStore,
        host: 'localhost',
        port: 6379,
    }),],
    controllers: [AppController],
})
export class AppModule {
}
