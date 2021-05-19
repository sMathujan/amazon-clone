const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IXNt2SGN53NQjOKHfgIyLGQ36BO2dhc7Mhqga70nCqQJVyLV25DmdqkB2cSF4efCsh7zcG5OqIlhyqIWTupRdIU00UlUeXDqW')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin:true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recived BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'rupee'
    });

    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-72221/us-central1/api

