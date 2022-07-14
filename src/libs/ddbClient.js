// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// Set the AWS Region.
const   REGION = "us-east-1"; //e.g. "us-east-1"

// Set the AWS Credentials
const CREDENTIALS = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY_ID
}
// Create an Amazon DynamoDB service client object.
export const ddbClient = new DynamoDBClient({ region: REGION, credentials: CREDENTIALS});