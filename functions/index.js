const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N2PvaBT4XGJH2fWiaVmPdI3mfFTH9uLdoOAmWHzFyI4X2ileSiUeM621f5MV3V9I25H3DsTy3sogTHYaaFri7g7008vamwdx3"
);
// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hi there"));
app.post("/payments/create", async (request, response) =>{
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})



// - Listen command
exports.api = functions.https.onRequest(app);


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
