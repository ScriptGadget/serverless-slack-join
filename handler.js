// handler.js - The main Lambda function
//
// All of the real work is done in the library files to make testing
// and porting a little easier, but this needs work still.
//

'use strict';
var qs = require('qs');
var reply = require('./lib/reply');
var slack = require('./lib/slack'); 

module.exports.join = (event, context, callback) => {
  // AWS API Gateway doesn't really get form data.
  // We could use a template here, but this is alot less opaque.
  var params = qs.parse(event.body);
  
  if (! params.email) {
    return reply.reply(200, { error: "email address is required" }, callback);
  }
  return slack.join(params, callback);
};
