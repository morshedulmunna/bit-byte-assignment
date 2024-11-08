import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Role = (role: string): CustomDecorator<string> =>
  SetMetadata(ROLES_KEY, role);
