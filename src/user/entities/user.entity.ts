import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 20,
  })
  username: string;

  @Column({
    length: 40,
    unique: true,
  })
  email: string;

  @Column({
    length: 100,
  })
  password: string;
}
