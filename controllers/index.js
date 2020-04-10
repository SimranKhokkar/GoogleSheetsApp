const {google} = require('googleapis');
const credentials = require('../credentials.json');

const createClient  = () => {
    return new Promise((resolve, reject) => {
        try {
            const client = new google.auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);
            client.authorize((err, token) => {
                if (err) {
                    console.log('err', err);
                    reject(err);
                }
                else {
                    console.log('Connected successfully!');
                }
            });
            resolve(client);
        } catch (err) {
            reject(err);
        }
    });
};

const appController = {

    displaySheetData: async (sheetDetails, callback) => {
        try {
            const auth = await createClient();
            const gsapi = google.sheets({ version: 'v4', auth });
            const sheetId = sheetDetails.link.substring(sheetDetails.link.lastIndexOf('d/') + 2, sheetDetails.link.lastIndexOf('/edit'));
            const sheetData = await gsapi.spreadsheets.values.get({ spreadsheetId: sheetId, range: sheetDetails.sheetName });
            callback(null, sheetData.data);
        } catch (err) {
            callback(err, null);
        }
    },
};

module.exports = appController;