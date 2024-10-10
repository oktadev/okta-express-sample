var express = require('express');
const universalLogoutRoute = express.Router();
const store  = require('./sessionStore');


universalLogoutRoute.post('/global-token-revocation', async (req, res) => {
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