import { ISoda } from '@entities/Soda';
import {ddbDoc} from '../dynamoDoc';
import { DeleteItemCommand, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {PutCommand} from '@aws-sdk/lib-dynamodb';



export interface ISodaDao {
    getOne: (brand: string) => Promise<ISoda | null>;
    getAll: () => Promise<ISoda[]>;
    add: (soda: ISoda) => Promise<void>;
    update: (soda: ISoda) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

class SodaDao implements ISodaDao {
    
    private TABLE_NAME = 'vendingmachine';
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
        const params = 
       {
            TableName: this.TABLE_NAME,
            Item:   {
                    id: { S: soda.id },
                    brand: {S :soda.brand},
                    distributor: {S:soda.distributor},
                    diet:{B:soda.diet},
                    caffeine: {B:soda.caffeine},
                    color:{S:soda.color}
        
                    }
        };
        
        try {
                const data = await ddbDoc.send(new PutCommand(params));
                console.log(data);                
            } catch (err) 
                {
                   console.error(err);
                }
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
