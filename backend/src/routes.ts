import { Router } from 'express';
import UsersController from './controllers/UsersController';
import EquipmentsController from './controllers/EquipmentsController';

const routes = Router();

routes.post('/login', UsersController.login);


routes.use(UsersController.verifyJWT) //middleware

//Rotas protejidas por middleware
routes.get('/equipments', EquipmentsController.index);
routes.post('/equipments', EquipmentsController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

export default routes;