'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const plaid = require('plaid');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nodemon = require('nodemon');
require('dotenv').config();

const APP_PORT = process.env.APP_PORT
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID
const PLAID_SECRET = process.env.PLAID_SECRET
const PLAID_PUBLIC_KEY = process.env.PLAID_PUBLIC_KEY
const PLAID_ENV = process.env.PLAID_ENV

// We store the access_token in memory - in production, store it in a secure
// persistent data store
const ACCESS_TOKEN = null;
const PUBLIC_TOKEN = null;

// Initialize the Plaid client
// const client = new plaid.Client(
//     PLAID_CLIENT_ID,
//     PLAID_SECRET,
//     PLAID_PUBLIC_KEY,
//     plaid.environments[PLAID_ENV]
// );
//
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', require('./resources'));

//
// app.get('/', function(request, response, next) {
//     response.render('index.ejs', {
//         PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
//         PLAID_ENV: PLAID_ENV,
//     });
// });
//
// app.post('/get_access_token', function(request, response, next) {
//     PUBLIC_TOKEN = request.body.public_token;
//     client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
//         if (error != null) {
//             let msg = 'Could not exchange public_token!';
//             console.log(msg + '\n' + error);
//             return response.json({error: msg});
//         }
//         ACCESS_TOKEN = tokenResponse.access_token;
//         console.log('Access Token: ' + ACCESS_TOKEN);
//         response.json({'error': false});
//     });
// });
//
// app.post('/set_access_token', function(request, response, next) {
//     ACCESS_TOKEN = request.body.access_token;
//     console.log('Access Token: ' + ACCESS_TOKEN);
//     response.json({'error': false});
// });
//
// app.get('/accounts', function(request, response, next) {
//     // Retrieve high-level account information and account and routing numbers
//     // for each account associated with the Item.
//     client.getAuth(ACCESS_TOKEN, function(error, authResponse) {
//         if(error != null) {
//             let msg = 'Unable to pull accounts from the Plaid API.';
//             console.log(msg + '\n' + error);
//             return response.json({error: msg});
//         }
//
//         console.log(authResponse.accounts);
//         response.json({
//             error: false,
//             accounts: authResponse.accounts,
//             numbers: authResponse.numbers,
//         });
//     });
// });
//
// app.post('/item', function(request, response, next) {
//     // Pull the Item - this includes information about available products,
//     // billed products, webhook information, and more.
//     client.getItem(ACCESS_TOKEN, function(error, itemResponse) {
//         if (error != null) {
//             console.log(JSON.stringify(error));
//             return response.json({error: error});
//         }
//
//         // Also pull information about the institution
//         client.getInstitutionById(itemResponse.item.institution_id, function(err, instRes) {
//             if (err != null) {
//             let msg = 'Unable to pull institution information from the Plaid API.';
//             console.log(msg + '\n' + error);
//             return response.json({error: msg});
//             } else {
//                 response.json({
//                     item: itemResponse.item,
//                     institution: instRes.institution,
//                 });
//             }
//         });
//     });
// });
//
// app.post('/transactions', function(request, response, next) {
//     // Pull transactions for the Item for the last 30 days
//     let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
//     let endDate = moment().format('YYYY-MM-DD');
//     client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
//         count: 250,
//         offset: 0,
//     }, function(error, transactionsResponse) {
//         if (error != null) {
//             console.log(JSON.stringify(error));
//             return response.json({error: error});
//         }
//         console.log('pulled ' + transactionsResponse.transactions.length + ' transactions');
//         response.json(transactionsResponse);
//     });
// });
//
const server = app.listen(process.env.APP_PORT, function () {
    console.log(`soft-shell tacos on ${process.env.APP_PORT}`);
});
