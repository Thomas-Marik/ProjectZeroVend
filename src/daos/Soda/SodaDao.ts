import { ISoda } from '@entities/Soda';





export interface ISodaDao {
    getOne: (brand: string) => Promise<ISoda | null>;
    getAll: () => Promise<ISoda[]>;
    add: (soda: ISoda) => Promise<void>;
    update: (soda: ISoda) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class SodaDao implements ISodaDao {
    

    /**
     * @param email
     */
    public getOne(id: string): Promise<ISoda | null> {
        // TODO
        return Promise.resolve(null);
    }


    /**
     *
     */
    public getAll(): Promise<ISoda[]> {
         // TODO
        return Promise.resolve([]);
    }


    /**
     *
     * @param user
     */
    public async add(soda: ISoda): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param user
     */
    public async update(soda: ISoda): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }


    /**
     *
     * @param id
     */
    public async delete(id: string): Promise<void> {
         // TODO
        return Promise.resolve(undefined);
    }
}

export default SodaDao;
