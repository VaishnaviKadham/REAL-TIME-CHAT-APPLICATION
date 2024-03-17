import { Client, Databases ,Account} from 'appwrite';

export const PROJECT_ID ='65d5810e1a2a49af9d02'
export const DATABASE_ID ='65d5819b1d59193e472e'
export const COLLECTION_ID_MESSAGES ='65d581a89dbd1237bb89'


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65d5810e1a2a49af9d02');


    export const account = new Account(client);
    export const databases = new Databases(client);


export default client;