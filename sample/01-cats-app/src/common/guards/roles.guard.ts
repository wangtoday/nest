import {CanActivate, ExecutionContext, Injectable, Logger} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    console.log('输出了this :: ',this)
  }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;  // 因为一般我们会把user的信息放在 request 上
    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
