import {CanActivate, Injectable} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {ExecutionContext} from "@nestjs/common/interfaces/features/execution-context.interface";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    canActivate(context: ExecutionContext):boolean{
        console.log('来肯定是来这里了, ', context.getHandler())
        // false 就是无法访问
        return false;
    }

}
