// Import required AWS SDK clients and commands for Node.js
import { GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./ddbDocClient";

// Set the parameters

export const getItem = async (PARAMS) => {
  try {
    const data = await ddbDocClient.send(new GetCommand(PARAMS));
    console.log("Success :", data.Item);
  } catch (err) {
    console.log("Error", err);
  }
};

export const getAllItems = async (PARAMS) => {
  try {
    const data = await ddbDocClient.send(new ScanCommand(PARAMS))
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}