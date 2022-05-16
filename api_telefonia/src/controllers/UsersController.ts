import { Request, response, Response } from 'express'
import { UsersServices } from '../services/UsersServices'

class UsersController {

  async create(request: Request, response: Response) {
    const { cpf, name, sector, company } = request.body

    const usersServices = new UsersServices()

    try {
      const users = await usersServices.create({ cpf, name, sector, company })
      return response.json(users)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const usersServices = new UsersServices()

    try {
      const users = await usersServices.index()
      return response.json(users)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const usersServices = new UsersServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const users = await usersServices.show({ id })
      return response.json(users)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const usersServices = new UsersServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const users = await usersServices.delete({ id })
      return response.json({ message: 'User id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { cpf, name, sector, company } = request.body
    const { id } = request.params

    const usersServices = new UsersServices()

    try {
      const users = await usersServices.update({ id, cpf, name, sector, company })
      return response.json(users)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { UsersController }

