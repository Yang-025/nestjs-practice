import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 0 }];
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): any {
    return { id: Number(id) };
  }
}
