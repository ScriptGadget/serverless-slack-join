// slack.js - Knows how to end a slack invitation.

'use strict';

var request = require('request');
require('dotenv').config();
var reply = require('./reply');

var config = {
  slack_domain: process.env.slack_domain, 
  slack_token: process.env.slack_token 
};

module.exports.join = (params, callback) => {
  request.post({
    url: 'https://'+ config.slack_domain + '/api/users.admin.invite',
    form: {
      email: params.email,
      token: config.slack_token,
      set_active: true
    }
  }, function(err, httpResponse, body) {
    if (err) {
      return reply.reply(200, err, callback);
    } else {
      return reply.reply(200, 'Invitation sent.', callback);
    }
  });
};

