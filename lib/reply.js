// reply.js - a useful wrapper for callback()

'use strict';

module.exports.reply = (code, response, callback) => {
  return callback(null, { statusCode: code,
                          body: JSON.stringify(response),
                        });
}
