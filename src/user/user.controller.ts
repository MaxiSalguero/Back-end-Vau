import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'Obtiene lista de usuarios registrados',
    description:
      'Permite obtener datos de usuarios registrados, para su ejecucion requiere token de autenticacion',
  })
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
