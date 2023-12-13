import { Storm } from './storm.entity';
import { Comment } from './comment.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Storm, (storm) => storm.user)
  storms: Storm[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
