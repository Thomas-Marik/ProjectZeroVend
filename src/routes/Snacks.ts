import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import SnackDao from '../daos/Snack/SnackDao';
import { paramMissingError } from '@shared/constants';
import SodaDao from '@daos/Soda/SodaDao';

const snackDao = new SnackDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
/*
export async function getOneSodaByID(req: Request, res: Response) {
    const {sodas} = req.params;
    const pop = await SnackDao.getOneSodaByID(sodas);
    return res.status(OK).json({sodas});
*/

/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
/*
export async function getAllSodas(req: Request, res: Response) {
    try {
        const sodas = await sodaDao.getAll({
            TableName: 'vendingmachine',

        });
    return res.status(OK).json({sodas});
}catch(err){

}finally{},


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneSnack(req: Request, res: Response) {
    const { snack } = req.body;
    if (!snack) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await snackDao.add(snack);
    return res.status(CREATED).end();
}


/**
 * Update one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneSnack(req: Request, res: Response) {
    const { snack } = req.body;
    if (!snack) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    snack.id = String(snack.id);
    await snackDao.update(snack);
    return res.status(OK).end();
}


/**
 * Delete one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */

export async function deleteOneSnack(req: Request, res: Response) {
    const { id } = req.params;
    await snackDao.delete(String(id));
    return res.status(OK).end();
}
