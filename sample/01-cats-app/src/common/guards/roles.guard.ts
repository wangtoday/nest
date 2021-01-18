import {CanActivate, ExecutionContext, Injectable, Logger} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    console.log('输出了this :: ',this)
  }

  canActivate(context: ExecutionContext): boolean {

    return true;
    console.log( context.getHandler()) // 返回的就是这个方法
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    context.getHandler()
    console.log('这么牛逼吗? ',roles,context.getHandler())
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();

    const user = request.user;
    // console.log('user:: ', user, request)
    const hasRole = () =>
      user.roles.some(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}
