import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from 'src/user/dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  @ApiOperation({ summary: 'Registra un nuevo usuario' })
  @ApiResponse({
    status: 201,
    description: 'Usuario registrado exitosamente',
  })
  @ApiResponse({
    status: 409,
    description: 'Esta email ya existe',
  })
  @ApiResponse({
    status: 400,
    description: 'El password no pudo ser hasheado',
  })
  async signUp(@Body() user: CreateUserDto) {
    return this.authService.signUp(user);
  }

  @Post('log-in')
  @ApiOperation({ summary: 'Loguea al usuario con sus credenciales' })
  @ApiResponse({
    status: 201,
    description: 'Usuario logueado correctamente',
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciales incorrectas',
  })
  async logIn(@Body() credentials: LoginUserDto) {
    const { email, password } = credentials;
    return this.authService.logIn(email, password);
  }
}
