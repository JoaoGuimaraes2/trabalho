import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUsersCreate {
  cpf: string;
  name: string;
  sector: string;
  company: string;
}

interface IUsersShow {
  id: string
}


interface IUsersUpdate {
  id: string;
  cpf: string;
  name: string;
  sector: string;
  company: string;
}

class UsersServices {

  async create({ cpf, name, sector, company }: IUsersCreate) {

    const usersRepository = getCustomRepository(UsersRepository)

    const users = usersRepository.create({
      cpf,
      name,
      sector,
      company
    })

    await usersRepository.save(users)

    return users
  }

  async index() {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.find()

    return users;
  }

  //async show({ id: string }) {
  async show({ id }: IUsersShow) {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.findOne({ id })

    console.log(users)

    if (!users) {
      throw new Error('User id not found!!')
    }

    return users;
  }

  async delete({ id }: IUsersShow) {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.findOne({ id })

    if (!users) {
      throw new Error('User id not found!!')
    }

    return await usersRepository.delete({ id })
  }

  async update({ id, cpf, name, sector, company }: IUsersUpdate) {
    const usersRepository = getCustomRepository(UsersRepository)

    let users = await usersRepository.findOne({ id })

    if (!users) {
      throw new Error('User id not found!!')
    }

    await usersRepository.update(
      { id },
      {
        cpf,
        name,
        sector, company
      }
    )

    const clientUpdated = await usersRepository.findOne({ id })

    return clientUpdated
  }
}

export { UsersServices }