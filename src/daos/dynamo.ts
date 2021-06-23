import { DynamoDBDocumentClient} from '@aws-sdk/lib-dynamodb'
import { DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {config} from "dotenv";
config();
const REGION="us-east-2";
//console.log(process.env);
const ddbb:DynamoDBClient = new DynamoDBClient({region: REGION, credentials: {accessKeyId:"AKIAXLF4Y5SJ4BACSJMF"!, secretAccessKey:"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"!}})

const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: false, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB Document client.
const ddbDoc = DynamoDBDocumentClient.from(ddbb, translateConfig);

export { ddbb, ddbDoc };

