import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('users')
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  cpf: string;

  @Column()
  name: string;

  @Column()
  sector: string;

  @Column()
  company: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { User }
