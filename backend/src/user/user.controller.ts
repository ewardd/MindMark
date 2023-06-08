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
import { User } from 'src/user/entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({ type: [User] })
  public findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({ type: User })
  public findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ type: User })
  public update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ type: Boolean })
  public remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
