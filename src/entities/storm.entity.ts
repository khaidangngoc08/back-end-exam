import { Comment } from 'src/entities/comment.entity';
import { User } from './user.entity';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Storm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cityName: string;

  @Column()
  affectedAreas: number;

  @Column()
  detectedTime: Date;

  @ManyToOne(() => User, (user) => user.storms)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.storm)
  comments: Comment[];
}
