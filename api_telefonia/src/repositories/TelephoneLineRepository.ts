import { Repository, EntityRepository } from 'typeorm'
import { TelephoneLine } from '../entities/TelephoneLine'

@EntityRepository(TelephoneLine)
class TelephoneLineRepository extends Repository<TelephoneLine> {

}

export { TelephoneLineRepository }