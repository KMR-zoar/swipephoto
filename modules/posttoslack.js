const request = require('request');
const config = require('../config');

let postToSlack = (message) =>{
   let options = {
      token : config.slack_token,
      channel: config.slack_channel,
      text : message,
      icon_url: config.slack_icon_url,
      username: config.slack_username
   };
   request.post(
      'https://slack.com/api/chat.postMessage',
      {
         form: options
      }, (err, res, body) => {
         if (err) throw err;
      }
   );
}

module.exports = postToSlack;