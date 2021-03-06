import Soda, { ISoda } from '@entities/Soda';
import {ddbDoc,ddbb} from '../dynamo';
import { DeleteItemCommand, DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {PutCommand, DeleteCommand, DynamoDBDocumentClient} from '@aws-sdk/lib-dynamodb';
import  * as AWS from 'aws-sdk';
import { promises } from 'fs';
import { DataBrew } from 'aws-sdk';
//import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const ddb = new AWS.DynamoDB.DocumentClient();

export interface ISodaDao {
    //getOne: (brand: string) => Promise<ISoda | null>;
    //getAll: () => Promise<ISoda[]>;
    add: (soda: ISoda) => Promise<void>;
    update: (soda: ISoda) => Promise<void>;
    //delete: (id: string) => Promise<void>;
}

class SodaDao implements ISodaDao {
    
    private TABLE_NAME = 'vendingmachine';
    
    
    /*
    public getOne(id: string): Promise<ISoda | null> {
        const params = {
            TableName: 'vendingmachine',
            Key: {
              'id': id
            }
        
          };
          
          // Call DynamoDB to read the item from the table
          ddb.get(params).promise();
          
      */     
        
    /*
      const getAll= async()=> {
      const params = {
            TableName:'vendingmachine',   
            
            }
          
          const sodas = await ddb.scan(params).promise();
          
          
        return sodas;
    }
*
          }
    /**
     *
     * @param user
     */
    public async add(soda: ISoda): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: soda
          };
          
          // Call DynamoDB to add the item to the table
         
             await ddbDoc.send(new PutCommand(params)); 
        
        
}
                 


    /**
     *
     * @param user
     */
    public async update(soda: ISoda): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: soda,

            
          };
          
          // Call DynamoDB to add the item to the table
         
             await ddbDoc.send(new PutCommand(params)); 
        
        
}


public async delete(id: string): Promise<void> {
    const params = {
         TableName:this.TABLE_NAME,
         Key: {
             id:{S : id}
         },
     }
       
       // Call DynamoDB to delete the item from the table
       ddb.delete(params).promise();

       
     
 }}
export default SodaDao;
