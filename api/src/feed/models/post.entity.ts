import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movie_nestdb')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  movie_name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  release_date: Date;
}
