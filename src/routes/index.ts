import { Router } from 'express';
//import { getAllSodas, addOneSoda, updateOneSoda, deleteOneSoda } from './Sodas';
import { addOneSoda, updateOneSoda, } from './Sodas'
import { addOneSnack, updateOneSnack,} from './Snacks'
// User-route
const sodaRouter = Router();
//sodaRouter.get('/one/id:', getOneSoda)
//sodaRouter.get('/all', getAllSodas);
sodaRouter.post('/add', addOneSoda);
sodaRouter.put('/update', updateOneSoda);
//sodaRouter.delete('/delete/:id', deleteOneSoda);

const snackRouter = Router();
//sodaRouter.get('/one/id:', getOneSoda)
//sodaRouter.get('/all', getAllSodas);
snackRouter.post('/add', addOneSnack);
snackRouter.put('/update', updateOneSnack);
//sodaRouter.delete('/delete/:id', deleteOneSnack);



// Export the base-router
const baseRouter = Router();
baseRouter.use('/sodas', sodaRouter);
baseRouter.use('/snacks', snackRouter);
export default baseRouter;
