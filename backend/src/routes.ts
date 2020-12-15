import { Router } from 'express';
import UsersController from './controllers/UsersController'
import EquipmentsController from './controllers/EquipmentsController'

const routes = Router();


routes.get('/equipments', EquipmentsController.index);
routes.post('/equipments', EquipmentsController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);
routes.post('/login', UsersController.login);

export default routes;