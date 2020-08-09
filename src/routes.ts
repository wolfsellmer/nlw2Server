import express from 'express';
import ClassesControler from './controllers/ClassesControllers';
import ConnectonsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionsController = new ConnectonsController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;