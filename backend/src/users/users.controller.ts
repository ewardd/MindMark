import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ type: [User] })
  public findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: User })
  public findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ type: User })
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ type: Boolean })
  public remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
