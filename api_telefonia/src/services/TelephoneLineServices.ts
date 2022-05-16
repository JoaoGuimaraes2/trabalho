import { getCustomRepository } from 'typeorm'
import { TelephoneLineRepository } from '../repositories/TelephoneLineRepository'

interface ITelephoneLineCreate {
  line_number: string;
  chip_number: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;
}

interface ITelephoneLineShow {
  id: string
}


interface ITelephoneLineUpdate {
  id: string;
  line_number: string;
  chip_number: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;
}

class TelephoneLineServices {

  async create({ line_number, chip_number, data_plan, account_number, telephone_operator}: ITelephoneLineCreate) {

    const telephoneLineRepository = getCustomRepository(TelephoneLineRepository)

    const telephoneLine = telephoneLineRepository.create({
      line_number, 
      chip_number, 
      data_plan, 
      account_number, 
      telephone_operator
    })

    await telephoneLineRepository.save(telephoneLine)

    return telephoneLine
  }

  async index() {
    const telephoneLineRepository = getCustomRepository(TelephoneLineRepository)

    const telephoneLine = await telephoneLineRepository.find()

    return telephoneLine;
  }

  //async show({ id: string }) {
  async show({ id }: ITelephoneLineShow) {
    const telephoneLineRepository = getCustomRepository(TelephoneLineRepository)

    const telephoneLine = await telephoneLineRepository.findOne({ id })

    console.log(telephoneLine)

    if (!telephoneLine) {
      throw new Error('User id not found!!')
    }

    return telephoneLine;
  }

  async delete({ id }: ITelephoneLineShow) {
    const telephoneLineRepository = getCustomRepository(TelephoneLineRepository)

    const telephoneLine = await telephoneLineRepository.findOne({ id })

    if (!telephoneLine) {
      throw new Error('User id not found!!')
    }

    return await telephoneLineRepository.delete({ id })
  }

  async update({ id, line_number, chip_number, data_plan, account_number, telephone_operator }: ITelephoneLineUpdate) {
    const telephoneLineRepository = getCustomRepository(TelephoneLineRepository)

    let telephoneLine = await telephoneLineRepository.findOne({ id })

    if (!telephoneLine) {
      throw new Error('User id not found!!')
    }

    await telephoneLineRepository.update(
      { id },
      {
        line_number, 
        chip_number, 
        data_plan, 
        account_number, 
        telephone_operator
      }
    )

    const clientUpdated = await telephoneLineRepository.findOne({ id })

    return clientUpdated
  }
}

export { TelephoneLineServices }