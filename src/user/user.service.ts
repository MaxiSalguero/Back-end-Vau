import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll() {
    const usersList = await this.userRepository.find();

    if (usersList.length < 1)
      throw new NotFoundException('No se encontraron usuarios registrados');

    return usersList.map(({ password, ...userNoPassword }) => userNoPassword);
  }
}
