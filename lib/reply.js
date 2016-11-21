// reply.js - a useful wrapper for callback()

'use strict';

module.exports.reply = (code, response, callback) => {
  return callback(null, { statusCode: code,
                          headers: {
                            'Access-Control-Allow-Origin': '*'
                          },
                          body: JSON.stringify({message: JSON.stringify(response)})
                        });
}
