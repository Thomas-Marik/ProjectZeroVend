import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
const REGION= "us-east-2";
const ddbClient:DynamoDBClient = new DynamoDBClient({region: REGION});
export {ddbClient};
