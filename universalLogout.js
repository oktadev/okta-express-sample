var express = require('express');
const universalLogoutRoute = express.Router();
const store  = require('./sessionStore');
var OktaJwtVerifier = require('@okta/jwt-verifier');
// source and import environment variables
require('dotenv').config({ path: '.okta.env' })
const { ORG_URL, CLIENT_ID, CLIENT_SECRET, CODESPACE_NAME} = process.env;

universalLogoutRoute.post('/global-token-revocation', async (req, res) => {

  // JWT Verification
  // const oktaJwtVerifier = new OktaJwtVerifier({
  //   issuer: `${ORG_URL}`,
  //   jwksUri: `${ORG_URL}/oauth2/v1/keys`,
  // });

  // token validation logic



  // 204 When the request is successful
  const httpStatus = 204;

  // 400 If the request is malformed
  if (!req.body) {
    res.status(400);
  }
  console.log(req.body)
  // Find the user by email
  
  // 404 User not found
  if (!user) {
    res.sendStatus(404);
  }

  // End user session
  const storedSession = store.sessions;
  const sids = [];
  Object.keys(storedSession).forEach((key) => {
    const sess = JSON.parse(storedSession[key]);
    if (sess.passport.user.username === user) {
      sids.push(key);
    }
  });

// Add your code here to end a user's session

//console.log('User session deleted')

  return res.sendStatus(httpStatus);
});

universalLogoutRoute.use((err,req,res,next) => {
  if(err){

    return res.sendStatus(404)
  }
})

module.exports = universalLogoutRoute;
