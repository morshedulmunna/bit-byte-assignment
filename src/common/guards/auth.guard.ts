import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'jsonwebtoken';
import { IS_PUBLIC_KEY } from '../decorator/public.decorator';
import { ROLES_KEY } from '../decorator/role.decorator';
import { CommonUtilityService } from '../utils';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly commonService: CommonUtilityService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isPublic: boolean = this.reflector.get<boolean>(
      IS_PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }

    const token: string = request.headers.authorization?.replace('Bearer ', '');

    if (!token) return false;

    const tokenVerified: string | boolean | JwtPayload =
      await this.isTokenVerify(token, process.env.JWT_SECRET);

    if (tokenVerified) return true;
    request.headers.set(tokenVerified);

    const requiredRole: string = this.reflector.get<string>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!requiredRole) {
      return true;
    }

    return true;
  }
  private async isTokenVerify(
    token: string,
    secret: string,
  ): Promise<string | boolean | JwtPayload> {
    const decoded = await this.commonService.decodeToken(token, secret);

    if (!decoded) return true;

    return decoded;
  }
}
