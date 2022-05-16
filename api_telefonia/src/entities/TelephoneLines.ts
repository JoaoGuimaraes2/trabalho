import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('telephoneLines')
class TelephoneLine {

  @PrimaryColumn()
  id: string;

  @Column()
  line_number: string;

  @Column()
  chip_number: string;

  @Column()
  data_plan: string;

  @Column()
  account_number: string;

  @Column()
  telephone_operator: string;

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

export { TelephoneLine }


