import { User } from './user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
