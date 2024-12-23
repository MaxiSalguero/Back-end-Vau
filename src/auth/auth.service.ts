import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new UnauthorizedException('Credenciales incorrectas');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Credenciales incorrectas');

    const userPayload = {
      sub: user.id,
      id: user.id,
      email: user.email,
    };

    const token = this.jwtService.sign(userPayload);

    return { succes: 'Usuario logueado correctamente', token };
  }

  async signUp(user: Partial<User>) {
    const { email, password } = user;
    const dbUser = await this.userRepository.findOneBy({ email });
    if (dbUser) throw new ConflictException('Esta email ya existe');

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword)
      throw new BadRequestException('El password no pudo ser hasheado');

    await this.userRepository.save({ ...user, password: hashedPassword });

    const newUser = await this.userRepository.findOneBy({ email });
    const { password: _, ...userNoPassword } = newUser;

    return userNoPassword;
  }
}
