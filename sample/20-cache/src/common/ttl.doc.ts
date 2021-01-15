import {SetMetadata} from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const SetTTL = (roles: number) => SetMetadata("cache_module:cache_ttl", roles);

export const CacheKey = (key: string) => SetMetadata('cache_module:cache_key', key);
