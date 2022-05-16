import { Request, response, Response } from 'express'
import { TelephoneLineServices } from '../services/TelephoneLineServices'

class TelephoneLineController {

  async create(request: Request, response: Response) {
    const { line_number, chip_number, data_plan, account_number, telephone_operator } = request.body

    const telephoneLineServices = new TelephoneLineServices()

    try {
      const telephoneLine = await telephoneLineServices.create({ line_number, chip_number, data_plan, account_number, telephone_operator })
      return response.json(telephoneLine)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const telephoneLineServices = new TelephoneLineServices()

    try {
      const telephoneLine = await telephoneLineServices.index()
      return response.json(telephoneLine)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const telephoneLineServices = new TelephoneLineServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const telephoneLine = await telephoneLineServices.show({ id })
      return response.json(telephoneLine)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const telephoneLineServices = new TelephoneLineServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const telephoneLine = await telephoneLineServices.delete({ id })
      return response.json({ message: 'TelephoneLine id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { line_number, chip_number, data_plan, account_number, telephone_operator } = request.body
    const { id } = request.params

    const telephoneLineServices = new TelephoneLineServices()

    try {
      const telephoneLine = await telephoneLineServices.update({ id, line_number, chip_number, data_plan, account_number, telephone_operator })
      return response.json(telephoneLine)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { TelephoneLineController }