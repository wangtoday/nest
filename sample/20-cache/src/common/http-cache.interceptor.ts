import { CacheInterceptor, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();

    const { httpAdapter } = this.httpAdapterHost;

    const httpServer = httpAdapter.getHttpServer();
    console.log(httpAdapter)
    const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET';
    const excludePaths = [];
    if (
      !isGetRequest ||
      (isGetRequest && excludePaths.includes(httpAdapter.getRequestUrl))
    ) {
      return undefined;
    }
    return httpAdapter.getRequestUrl(request);
  }
}
