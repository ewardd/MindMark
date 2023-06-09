import { AuthUtils } from 'src/utils/Auth';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}

  public findOne = (id: string): Promise<User | null> => {
    return this._userRepository.findOneBy({ id });
  };

  public findOneByEmail = (email: string): Promise<User | null> => {
    return this._userRepository.findOneBy({ email });
  };

  public update = async (id: string, { password, ...updateUserDto }: UpdateUserDto): Promise<User> => {
    const user = await this.findOne(id);
    if (!user) throw new BadRequestException();

    Object.assign(user, updateUserDto);

    if (password) {
      user.passwordHash = await AuthUtils.getPasswordHash(password);
    }

    return await this._userRepository.save(user);
  };

  public remove = async (id: string): Promise<boolean> => !!(await this._userRepository.softDelete(id)).affected;
}
