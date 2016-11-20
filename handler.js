'use strict';
var request = require('request');
var qs = require('qs');
require('dotenv').config();

var config = {
  slack_domain: process.env.slack_domain, 
  slack_token: process.env.slack_token 
};

module.exports.join = (event, context, callback) => {
  var params = qs.parse(event.body);
  if (! params.email ) {
    callback(null, { statusCode: 200,
                     body: JSON.stringify({
                       error : 'email addess is required',
                     }),
                   });
  } else {
    console.log("in join: " + event.email);
    request.post({
        url: 'https://'+ config.slack_domain + '/api/users.admin.invite',
        form: {
          email: params.email,
          token: config.slack_token,
          set_active: true
        }
    }, function(err, httpResponse, body) {
      if (err) {
        callback(null, err);
      } else {
        callback(null, { statusCode: 200,
                         body: JSON.stringify({
                           message : 'Invitation sent.'
                         }),
                       });
      }
    });
  };
};
