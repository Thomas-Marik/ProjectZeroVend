import Snack, { ISnack } from '../../entities/Snack';
import {ddbDoc,ddbb} from '../dynamo';
import { DeleteItemCommand, DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {PutCommand, DeleteCommand, DynamoDBDocumentClient} from '@aws-sdk/lib-dynamodb';
import  * as AWS from 'aws-sdk';
import { promises } from 'fs';

const ddb = new AWS.DynamoDB.DocumentClient();

export interface ISnackDao {
    //getOne: (brand: string) => Promise<ISoda | null>;
    //getAll: () => Promise<ISoda[]>;
    add: (snack: ISnack) => Promise<void>;
    update: (snack: ISnack) => Promise<void>;
    //delete: (id: string) => Promise<void>;
}

class SnackDao implements ISnackDao {
    
    private TABLE_NAME = 'vendingmachine';
    
    
    /**
     * @param email
     *
    *//*
    public async getOne(id: string): Promise<ISoda | null> {
        const params = {
            TableName: 'vendingmachine',
            Key: {
              'id': {S: '001'}
            },
            ProjectionExpression: 'id'
          };
          
          // Call DynamoDB to read the item from the table
          await ddb.get(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data.Item);
            }
          })
        }
   /*const getAll= async()=> {
      const params = {
            TableName:'vendingmachine',   
            
            }
          
          const sodas = await ddb.scan(params).promise();
          
          
        return sodas;
    }


    /**
     *
     * @param user
     */
    public async add(snack: ISnack): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: snack
          };
          
          // Call DynamoDB to add the item to the table
         
             await ddbDoc.send(new PutCommand(params)); 
        
    }
                 


    /**
     *
     * @param user
     */
    public async update(snack: ISnack): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: snack,            
          };
          
          // Call DynamoDB to add the item to the table
         
             await ddbDoc.send(new PutCommand(params)); 
        
        
}


    /**
     *
     * @param id
     */
    
    public async delete(id: string): Promise<void> {
       const params = {
            TableName:this.TABLE_NAME,
            Key: {
                id:{S: id}
            },
        }
          
          // Call DynamoDB to delete the item from the table
          ddb.delete(params).promise();
  
          
        
    }}
         
export default SnackDao;
    