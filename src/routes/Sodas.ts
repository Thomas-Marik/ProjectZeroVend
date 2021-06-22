import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import SodaDao from '../daos/Soda/SodaDao';
import { paramMissingError } from '@shared/constants';

const sodaDao = new SodaDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all users.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllUsers(req: Request, res: Response) {
    const users = await sodaDao.getAll();
    return res.status(OK).json({users});
}


/**
 * Add one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneUser(req: Request, res: Response) {
    const { soda } = req.body;
    if (!soda) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await sodaDao.add(soda);
    return res.status(CREATED).end();
}


/**
 * Update one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneUser(req: Request, res: Response) {
    const { soda } = req.body;
    if (!soda) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    soda.id = String(soda.id);
    await sodaDao.update(soda);
    return res.status(OK).end();
}


/**
 * Delete one user.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneUser(req: Request, res: Response) {
    const { id } = req.params;
    await sodaDao.delete(String(id));
    return res.status(OK).end();
}
