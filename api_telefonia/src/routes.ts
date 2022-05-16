import { Router } from 'express'

import { UsersController } from './controllers/UsersController'

const routes = Router();

const usersController = new UsersController()

routes.post('/users', usersController.create)
routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.delete('/users/:id', usersController.delete)
routes.put('/users/:id', usersController.update)

export { routes }

