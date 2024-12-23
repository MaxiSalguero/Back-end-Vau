import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { ApiProperty, PickType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'UserExample',
    description:
      'Nombre de usuario. Debe tener entre 3 y 20 caracteres alfanuméricos.',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  username: string;

  @ApiProperty({
    example: 'user@example.com',
    description:
      'Correo electrónico del usuario. Debe ser válido y único en el sistema.',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(40)
  email: string;

  @ApiProperty({
    example: 'Example123!',
    description:
      'Contraseña del usuario. Debe tener entre 8 y 100 caracteres e incluir al menos una letra minúscula, una letra mayúscula, un número y un carácter especial',
  })
  @IsNotEmpty()
  @Length(8, 100)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
    {
      message:
        'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un caracter especial de !@#$%^&*',
    },
  )
  password: string;
}

export class LoginUserDto extends PickType(CreateUserDto, [
  'email',
  'password',
]) {}
