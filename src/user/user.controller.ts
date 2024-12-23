import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiBearerAuth() 
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios obtenida exitosamente',
  })
  @ApiResponse({
    status: 404,
    description: 'No se encontraron usuarios registrados',
  })
  findAll() {
    return this.userService.findAll();
  }
}
