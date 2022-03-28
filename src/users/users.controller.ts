import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): any {
    return this.usersService.findById(Number(id));
  }
}
