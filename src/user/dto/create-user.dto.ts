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
    description: 'Esta es la propiedad username',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  username: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Esta es la propiedad email',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(40)
  email: string;

  @ApiProperty({
    example: 'Example123!',
    description: 'Esta es la propiedad password',
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
