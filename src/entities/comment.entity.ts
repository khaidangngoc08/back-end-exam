import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  stormId: number;

  @Column()
  video: string;

  @Column()
  image: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
