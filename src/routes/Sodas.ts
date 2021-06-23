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
/*
export async function getAllSodas(req: Request, res: Response) {
    const sodas = await sodaDao.getAll();
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
export async function addOneSoda(req: Request, res: Response) {
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
export async function updateOneSoda(req: Request, res: Response) {
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
/*
export async function deleteOneSoda(req: Request, res: Response) {
    const { id } = req.params;
    await sodaDao.delete(String(id));
    return res.status(OK).end();
}*/
