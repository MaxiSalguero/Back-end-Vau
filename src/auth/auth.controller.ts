import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() user: CreateUserDto) {
    return this.authService.signUp(user);
  }

  @Post('log-in')
  async logIn(@Body() credentials: LoginUserDto) {
    const { email, password } = credentials;
    return this.authService.logIn(email, password);
  }
}
