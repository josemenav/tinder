const { MongoClient } = require('mongodb');

let db;

async function connectToDatabase() {
    const uri = 'mongodb+srv://josemenavTest:mypassword@clustertinder.frdfaiz.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('app-data');
}

connectToDatabase().catch(console.error);

exports.findOne = async (email) => {
    const users = await db.collection('users');
    return await users.findOne({ email });
};

exports.insertOne = async (data) => {
    const users = await db.collection('users');
    return await users.insertOne(data);
};

exports.updateOne = async (user_id, data) => {
    try{
        const users = await db.collection('users');
        const query = { user_id };
        const updateDocument = {
            $set: {
                first_name: data.first_name, 
                dob_day: data.dob_day,
                dob_month: data.dob_month,
                dob_year: data.dob_year,
                show_gender: data.show_gender, 
                gender_identity: data.gender_identity,
                gender_interest: data.gender_interest,
                url: data.url,
                about: data.about,
                matches: data.matches
            }
        };
    
        const insertedUser = await users.updateOne(query, updateDocument);
        return insertedUser;
    } catch (error) {
        console.error(error);
    }
}