import axios from "axios";

/**
 * Get all projects from AWS DynamoDB
 *
 * @return {*} 
 */
export const getAllItems = async () => {
    const URL = 'https://tap9iqij4e.execute-api.us-east-1.amazonaws.com/prod'
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (err) {
        console.log("Error", err);
    }
}