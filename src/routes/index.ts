import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';


// User-route
const sodaRouter = Router();
sodaRouter.get('/all', getAllUsers);
sodaRouter.post('/add', addOneUser);
sodaRouter.put('/update', updateOneUser);
sodaRouter.delete('/delete/:id', deleteOneUser);




// Export the base-router
const baseRouter = Router();
baseRouter.use('/sodas', sodaRouter);
export default baseRouter;
